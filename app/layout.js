import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blossom POS | Premium Garden Center Management",
  description: "A visually rich, high-performance POS system for modern nurseries and garden centers.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
