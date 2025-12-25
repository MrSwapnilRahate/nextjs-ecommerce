import Image from "next/image";

export default function Home() {
  return (
    <section>
      {/* No fetch = SSG automatically */}
      <h1>Welcome to NextShop</h1>
      <p>Fast, SEO-friendly e-commerce built with Next,js</p>
    </section>
  );
}
