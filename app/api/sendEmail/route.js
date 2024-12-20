import nodemailer from 'nodemailer';

export async function POST(req) {
    
    const { name, email, message, captchaValue } = await req.json();

    // Verify the reCAPTCHA token with Google
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY, 
            response: captchaValue
        })
    });

    const recaptchaResult = await recaptchaResponse.json();

    // Check if the reCAPTCHA verification was successful
    if (!recaptchaResult.success) {
        return new Response(JSON.stringify({ message: 'reCAPTCHA verification failed' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `New contact request from ${name}`,  
        text: `nathant.dev contact form data:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error("Email error:", error);
        return new Response(JSON.stringify({ message: 'Email sending failed', error }), { status: 500 });
    }
}
