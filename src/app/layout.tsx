import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Keploy Quickstart: Go (Echo + PostgreSQL) Tutorial & Guide",
  description: "Learn how to record e2e tests and mock PostgreSQL databases automatically for Go applications using Keploy.",
  keywords: ["Keploy", "Go", "Echo", "PostgreSQL", "DevRel", "e2e Testing", "API Mocking", "MDX"],
  authors: [{ name: "Keploy DevRel Candidate" }],
  openGraph: {
    title: "Keploy Quickstart: Go (Echo + PostgreSQL) Tutorial",
    description: "Automate API testing and PostgreSQL mocks without writing test code.",
    type: "article",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased transition-colors">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
