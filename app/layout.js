import "./globals.css";
import "../components/animations/stars.scss"

export const metadata = {
  title: "nathant.dev",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tag.png" />
      </head>
      <body>
        {/* starry background animation */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        {children}
      </body>
    </html>
  );
}
