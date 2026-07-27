import type { Metadata } from "next";
import { Inter, Caveat, Space_Mono } from "next/font/google";
import "./globals.css";
import DockNav from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

/* hand-drawn annotations + sticker labels */
const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Artha Gandhi — Full-Stack Developer",
  description:
    "Full-Stack Developer based in Indonesia. Building modern web applications from ideation to launch.",
    icons: {
    icon: '/about-icon.webp?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} ${spaceMono.variable} antialiased`}>
       
        <DockNav />

        {children}
      </body>
    </html>
  );
}
