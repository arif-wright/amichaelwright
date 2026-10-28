const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

// Exercise the actual template with a fake provider; no credentials or mail.
function fixture({ configured = true, error = null } = {}) {
  const sent = [];
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync('app/email.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(code, {
    exports,
    require: name => {
      if (name === 'resend') return { Resend: class {
        emails = { send: async payload => { sent.push(payload); return { error }; } };
      } };
      assert.equal(name, './site-data');
      return { authorName: 'A. Michael Wright', seriesName: 'The Wellspring Saga', siteUrl: 'https://amichaelwright.com' };
    },
    console: { error() {} },
    process: { env: {
      RESEND_API_KEY: configured ? 'fake' : undefined,
      RESEND_FROM_EMAIL: 'sender@example.com',
      RESEND_REPLY_TO_EMAIL: 'reply@example.com',
    } },
  });
  return { send: exports.sendNewsletterWelcomeEmail, sent };
}

test('HTML and text contain clearly labeled preview and Kindle links, monthly cadence, and unsubscribe', async () => {
  const f = fixture();
  const address = 'a<>&"\'@example.com';
  assert.equal((await f.send(address)).sent, true);
  assert.equal(f.sent.length, 1);
  const email = f.sent[0];
  assert.equal(email.to, address);
  assert.equal(email.from, 'sender@example.com');
  assert.equal(email.replyTo, 'reply@example.com');
  assert.equal(email.subject, 'Welcome to The Wellspring Saga');
  for (const body of [email.html, email.text]) {
    assert.ok(body.includes('https://amichaelwright.com/excerpt'));
    assert.ok(body.includes('https://www.amazon.com/dp/B0GXH3NQNV'));
    assert.ok(body.includes('https://amichaelwright.com/unsubscribe'));
    assert.ok(body.includes('about once a month'));
    assert.ok(body.includes('Book One preview'));
    assert.ok(body.includes('Book One on Kindle'));
  }
  assert.ok(email.html.includes('a&lt;&gt;&amp;&quot;&#039;@example.com'));
  assert.ok(!email.html.includes(address));
});

test('missing provider configuration sends nothing', async () => {
  const f = fixture({ configured: false });
  assert.equal((await f.send('reader@example.com')).sent, false);
  assert.equal(f.sent.length, 0);
});

test('provider error retains existing best-effort result', async () => {
  const f = fixture({ error: { message: 'fake provider error' } });
  assert.equal((await f.send('reader@example.com')).sent, false);
  assert.equal(f.sent.length, 1);
});
