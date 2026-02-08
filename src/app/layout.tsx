import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern 3D Portfolio",
  description: "A high-performance portfolio built with Next.js, Three.js, and React Three Fiber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
