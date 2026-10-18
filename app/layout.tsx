import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEC Connect | GTU Notes, Mid-Sem PYQs & Topper Sheets",
  description: "The student-powered digital library for GEC Dahod & GTU Engineering. Access verified branch notes, derivations, and topper answer sheets.",
  openGraph: {
    title: "⚡ GEC Connect — Survive GTU. Ace Your Mid-Sems.",
    description: "Download Sem-1 Electrical, Mechanical, Physics & Math-1 notes, solved mid-sem PYQs, and upvote the best study materials.",
    type: "website",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body>
  {children}
  <Analytics />
</body>
    </html>
  );
}
