import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const jostRegular = localFont({
  src: "./fonts/Jost-Regular.ttf",
  variable: "--font-jost-regular",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Matrimony",
  description: "Matrimony Designing and Development Company",
};

export default function RootLayout({ children,}: Readonly<{
  children: React.ReactNode; }>) {
  return (
      <html lang="en">
      <body
          className={`${jostRegular.variable} ${jostRegular.variable} antialiased`}
      >
      {children}
      </body>
      </html>
  );
}
