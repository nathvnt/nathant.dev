export async function POST(req) {
  try {
    const { token } = await req.json();

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET,
        response: token,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ success: false, errors: data["error-codes"] }), { status: 400 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Verification failed" }), { status: 500 });
  }
}

