import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Stackers - Android App Showcase",
  description: "Tech Stackers brand homepage showcasing our Android applications and services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-[#3d5e7d] text-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/ts-symbol.jpg"
                  alt="Tech Stackers"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-lg"
                />
              </Link>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:underline transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline transition-all">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline transition-all">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-[#3d5e7d] text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Tech Stackers. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
