import type { Metadata } from "next";
import {fontHardman, fontSuisse, fontABCDiatype, fontIbmPlexMono } from '@/lib/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Photosynthesis",
  description: "This is a pseudo-documentary exploration of photosynthesis, aimed at encouraging people to look at the world around them a little more broadly.",
    icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontHardman.variable} ${fontSuisse.variable} ${fontABCDiatype.variable} ${fontIbmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
