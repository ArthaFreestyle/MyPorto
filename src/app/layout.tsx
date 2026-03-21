import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DockNav from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Artha Gandhi — Full-Stack Developer",
  description:
    "Full-Stack Developer based in Indonesia. Building modern web applications from ideation to launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Ambient gradient orbs removed for klvn.dev flat style */}

        {/* Dock nav — rendered ONCE in layout, persists across pages */}
        <DockNav />

        {children}
      </body>
    </html>
  );
}
