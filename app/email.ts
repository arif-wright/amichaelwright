import { Resend } from "resend";
import { authorName, seriesName, siteUrl } from "./site-data";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail =
  process.env.RESEND_FROM_EMAIL || "A. Michael Wright <onboarding@resend.dev>";
const resendReplyToEmail = process.env.RESEND_REPLY_TO_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendNewsletterWelcomeEmail(email: string) {
  if (!resend) {
    return { sent: false, reason: "Resend is not configured." };
  }

  const escapedEmail = escapeHtml(email);

  const { error } = await resend.emails.send({
    from: resendFromEmail,
    to: email,
    replyTo: resendReplyToEmail,
    subject: `Welcome to ${seriesName}`,
    html: `
      <div style="background:#050202;color:#f7ead1;font-family:Georgia,'Times New Roman',serif;padding:32px;">
        <div style="max-width:620px;margin:0 auto;border:1px solid #6e1b12;padding:28px;background:#111;">
          <p style="color:#d8a846;font-size:12px;letter-spacing:0.22em;text-transform:uppercase;margin:0 0 18px;">
            ${seriesName}
          </p>
          <h1 style="color:#fff1c5;font-size:30px;line-height:1.15;margin:0 0 18px;">
            You're on the list.
          </h1>
          <p style="font-size:17px;line-height:1.65;margin:0 0 18px;">
            Thanks for joining ${authorName}'s reader list. You'll get release news, bonus lore,
            and behind-the-scenes notes from ${seriesName}.
          </p>
          <p style="font-size:17px;line-height:1.65;margin:0 0 24px;">
            The next fracture will find you first.
          </p>
          <p style="font-size:14px;line-height:1.6;color:#8d7b62;margin:0;">
            This confirmation was sent to ${escapedEmail}. Visit
            <a href="${siteUrl}" style="color:#d8a846;">${siteUrl}</a>.
            To leave the list, visit
            <a href="${siteUrl}/unsubscribe" style="color:#d8a846;">${siteUrl}/unsubscribe</a>.
          </p>
        </div>
      </div>
    `,
    text: `You're on the list.\n\nThanks for joining ${authorName}'s reader list. You'll get release news, bonus lore, and behind-the-scenes notes from ${seriesName}.\n\nThe next fracture will find you first.\n\n${siteUrl}\n\nUnsubscribe: ${siteUrl}/unsubscribe`,
  });

  if (error) {
    console.error("Resend newsletter welcome email failed", error);
    return { sent: false, reason: "Resend failed to send." };
  }

  return { sent: true };
}
