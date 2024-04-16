import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar, Footer } from "@/components";
import "./globals.css";


export const metadata: Metadata = {
  title: "CarHub",
  description: "Get your car ASAP!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
