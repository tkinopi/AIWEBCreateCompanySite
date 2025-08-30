import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "NEXUS - AI-Powered Web Solutions",
  description: "AIを活用した次世代Web制作｜革新的なデジタル体験を創造",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
