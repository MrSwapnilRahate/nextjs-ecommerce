import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextShop",
  description: "Production-ready Next.js E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>Navbar</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
