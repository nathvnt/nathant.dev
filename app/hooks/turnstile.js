//code for client side turnstile verification

import { useEffect, useState } from "react";

export default function useTurnstile() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => {
      window.turnstile.render("#turnstile-container", {
        sitekey: "0x4AAAAAAAzZ2vHpE8ShTDs2",
        callback: async (token) => {
          const res = await fetch("/api/verify-turnstile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          });
          const data = await res.json();
          if (data.success) {
            setTimeout(() => {
                setIsVerified(true);
              }, 1000); 
          } else {
            console.error("Token verification failed");
          }
        },
      });
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return isVerified;
}
