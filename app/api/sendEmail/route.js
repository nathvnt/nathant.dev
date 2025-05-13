import axios from 'axios';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(FormData);

export async function POST(req) {
  const { name, email, message, captchaValue } = await req.json();

  // reCAPTCHA verification
  try {
    const recaptchaResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: captchaValue,
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        timeout: 5000,
      }
    );

    const recaptchaResult = recaptchaResponse.data;

    if (!recaptchaResult.success) {
      return new Response(JSON.stringify({ message: 'reCAPTCHA verification failed' }), { status: 400 });
    }
  } catch (err) {
    // console.error("[API] reCAPTCHA error:", err.message);
    return new Response(JSON.stringify({ message: 'reCAPTCHA request error', error: err.message }), { status: 500 });
  }

  // Mailgun send
  try {
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    });

    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `nathant.dev <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: [process.env.EMAIL_TO],
      subject: `New contact request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // console.log("[Mailgun SDK] Message sent:", result);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });

  } catch (error) {
    // console.error("[Mailgun SDK] Error:", error.message || error);
    return new Response(JSON.stringify({ message: 'Email sending failed', error: error.message }), { status: 500 });
  }
}
