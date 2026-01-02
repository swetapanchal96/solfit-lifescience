import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import SolfitHeader from "./components/Header";
import ScrollToTopProgress from "./components/ScrollToTopProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
});

export const metadata: Metadata = {
  title: "Solfit Lifesciences | Premium Collagen & Enzyme Solutions",
  description: "Solfit Lifesciences is a leading manufacturer of advanced collagen & enzyme ingredients—fish collagen peptide, veg collagen, undenatured type II collagen, copper tripeptide, papain & bromelain—for nutraceutical, cosmetic, food & pharma use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}
      >
        <SolfitHeader />
        {children}
        <ScrollToTopProgress />
        <Footer />
      </body>
    </html>
  );
}
