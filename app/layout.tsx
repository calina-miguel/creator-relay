import type { Metadata } from "next";
import "./globals.css";
import { MotionEffects } from "./motion-effects";

export const metadata: Metadata = {
  title: "Creator Relay",
  description: "A clear content-to-commerce route for creators building their next product line.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<MotionEffects /></body>
    </html>
  );
}
