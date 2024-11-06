import localFont from "next/font/local";
import "./globals.css";
import "../components/animations/stars.scss"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "nathant.dev",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/tag.png" />
      <title>nathant.dev</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Starry background animation */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        {children}
      </body>
    </html>
  );
}
