import type { Metadata } from "next";
import { Montserrat, Satisfy } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Footer } from "@/sections/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Inject IVF",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${satisfy.variable}`}>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
