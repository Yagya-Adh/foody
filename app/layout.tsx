import type { Metadata } from "next";
import { Urbanist, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Image from "next/image";
import Footer from "./components/footer/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home - Foody Website Template",
  description: "Created by Jamstackers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${urbanist.variable} ${oswald.variable} ${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <div className="absolute -z-10 right-0 top-0">
          <Image
            src="/assets/hero.svg"
            alt="hero_bg_image"
            width={1000}
            height={1000}
            className="object-center object-cover h-screen w-auto"
          />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
