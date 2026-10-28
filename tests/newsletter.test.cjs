const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

// Execute the real TypeScript modules with in-memory boundaries. No production
// database, credentials, network requests, or email delivery are used.
function load(file, modules, globals = {}) {
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  vm.runInNewContext(code, {
    exports, require: name => {
      assert.ok(name in modules, `Unexpected import: ${name}`);
      return modules[name];
    }, console: { error() {} }, ...globals,
  }, { filename: file });
  return exports;
}

function fixture({ existing = [], configured = true, dbFailure, emailFailure, returned } = {}) {
  const rows = new Map(existing.map(row => [row.email, { ...row }]));
  const calls = [], emails = [];
  const { POST } = load('app/api/newsletter/route.ts', {
    'next/server': { NextResponse: { json: (body, init) => ({ body, status: init?.status || 200 }) } },
    '../../email': { sendNewsletterWelcomeEmail: async email => {
      emails.push(email);
      if (emailFailure === 'throw') throw new Error('provider');
      return { sent: !emailFailure };
    } },
    '../../supabase-server': {
      getSupabaseConfig: () => configured ? { url: 'https://db.invalid', serviceRoleKey: 'fake' } : null,
      supabaseHeaders: () => ({ apikey: 'fake' }),
      getRequestMetadata: () => ({ user_agent: 'test', referrer: 'https://site.invalid' }),
    },
  }, { fetch: async (url, options) => {
    calls.push({ url, options });
    if (dbFailure === 'throw') throw new Error('network');
    if (dbFailure === 'http') return { ok: false };
    const body = JSON.parse(options.body);
    assert.equal(options.method, 'POST');
    assert.equal(options.headers.Prefer, 'resolution=ignore-duplicates,return=representation');
    assert.match(url, /on_conflict=email&select=id$/);
    assert.equal('unsubscribed_at' in body, false);
    // Models the verified UNIQUE(email) + ON CONFLICT DO NOTHING transaction.
    const inserted = !rows.has(body.email);
    if (inserted) rows.set(body.email, { id: 'new-id', ...body, unsubscribed_at: null });
    await Promise.resolve();
    return { ok: true, json: async () => {
      if (returned === 'malformed') throw new Error('json');
      if (returned !== undefined) return returned;
      return inserted ? [{ id: 'new-id' }] : [];
    } };
  } });
  const submit = payload => POST({ json: async () => payload });
  return { submit, POST, rows, calls, emails };
}

test('new signup normalizes address, inserts metadata, and sends one welcome', async () => {
  const f = fixture();
  assert.equal((await f.submit({ email: ' Reader@Example.com ', source: 'excerpt' })).status, 200);
  assert.deepEqual(f.emails, ['reader@example.com']);
  assert.equal(f.rows.get('reader@example.com').source, 'excerpt');
});

for (const unsubscribed_at of [null, '2026-01-01T00:00:00Z']) {
  test(`existing address preserves every field, including unsubscribe=${unsubscribed_at}`, async () => {
    const old = { id: 'old', email: 'reader@example.com', source: 'original',
      user_agent: 'original', referrer: null, unsubscribed_at, updated_at: 'original' };
    const f = fixture({ existing: [old] });
    const response = await f.submit({ email: ' READER@example.com ', source: 'changed' });
    assert.equal(response.status, 200);
    assert.deepEqual(f.rows.get(old.email), old);
    assert.equal(f.emails.length, 0);
    assert.equal(response.body.message, (await fixture().submit({ email: old.email })).body.message);
  });
}

test('concurrent normalized submissions insert once and send exactly once', async () => {
  const f = fixture();
  const responses = await Promise.all(Array.from({ length: 20 }, (_, i) =>
    f.submit({ email: i % 2 ? 'Reader@Example.com' : ' reader@example.com ' })));
  assert.equal(f.rows.size, 1);
  assert.equal(f.emails.length, 1);
  assert.ok(responses.every(r => r.status === 200 && r.body.message === responses[0].body.message));
});

for (const emailFailure of ['throw', 'returned-error']) {
  test(`provider ${emailFailure} keeps saved signup successful and does not resend`, async () => {
    const f = fixture({ emailFailure });
    const first = await f.submit({ email: 'reader@example.com' });
    const second = await f.submit({ email: 'reader@example.com' });
    assert.equal(first.status, 200);
    assert.equal(second.status, 200);
    assert.equal(f.rows.size, 1);
    assert.equal(f.emails.length, 1);
  });
}

for (const dbFailure of ['http', 'throw']) {
  test(`database ${dbFailure} error never sends email`, async () => {
    const f = fixture({ dbFailure });
    assert.equal((await f.submit({ email: 'reader@example.com' })).status, 502);
    assert.equal(f.emails.length, 0);
  });
}

for (const returned of ['malformed', null, {}, [{}]]) {
  test(`unexpected insertion response ${JSON.stringify(returned)} fails closed for email`, async () => {
    const f = fixture({ returned });
    assert.equal((await f.submit({ email: 'reader@example.com' })).status, 200);
    assert.equal(f.emails.length, 0);
  });
}

for (const payload of [null, {}, { email: 1 }, { email: 'invalid' }, { email: 'a@b' }]) {
  test(`invalid payload ${JSON.stringify(payload)} is rejected without database access`, async () => {
    const f = fixture();
    assert.equal((await f.submit(payload)).status, 400);
    assert.equal(f.calls.length, 0);
  });
}

test('invalid JSON and missing configuration are handled', async () => {
  const f = fixture();
  assert.equal((await f.POST({ json: async () => { throw new Error('json'); } })).status, 400);
  assert.equal((await fixture({ configured: false }).submit({ email: 'reader@example.com' })).status, 503);
});

test('HTML and text include preview, Kindle, monthly cadence, and unsubscribe; sender and escaping survive', async () => {
  let sent;
  const { sendNewsletterWelcomeEmail } = load('app/email.ts', {
    resend: { Resend: class { emails = { send: async payload => { sent = payload; return {}; } }; } },
    './site-data': { authorName: 'A. Michael Wright', seriesName: 'The Wellspring Saga', siteUrl: 'https://amichaelwright.com' },
  }, { process: { env: { RESEND_API_KEY: 'fake', RESEND_FROM_EMAIL: 'sender@example.com', RESEND_REPLY_TO_EMAIL: 'reply@example.com' } } });
  await sendNewsletterWelcomeEmail('a<>&"\'@example.com');
  assert.equal(sent.from, 'sender@example.com');
  assert.equal(sent.replyTo, 'reply@example.com');
  assert.equal(sent.subject, 'Welcome to The Wellspring Saga');
  for (const body of [sent.html, sent.text]) {
    assert.ok(body.includes('https://amichaelwright.com/excerpt'));
    assert.ok(body.includes('https://www.amazon.com/dp/B0GXH3NQNV'));
    assert.ok(body.includes('https://amichaelwright.com/unsubscribe'));
    assert.ok(body.includes('about once a month'));
    assert.ok(body.includes('Book One preview'));
    assert.ok(body.includes('Book One on Kindle'));
  }
  assert.ok(sent.html.includes('a&lt;&gt;&amp;&quot;&#039;@example.com'));
});
