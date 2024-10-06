import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// font-[family-name:var(--font-aquire)]
const aquire = localFont({
  src: "./fonts/aquire.woff",
  variable: "--font-aquire",
});

export const metadata: Metadata = {
  title: "Cho'Gastronomique",
  description:
    "Découvrez des petits plats et des expériences culinaires uniques.",
  keywords: [
    "cuisine",
    "plats créatifs",
    "gastronomie",
    "recettes",
    "expériences culinaires",
  ],
  authors: [{ name: "Lilian Brossard" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${aquire.variable} antialiased bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500`}
      >
        {children}
      </body>
    </html>
  );
}
