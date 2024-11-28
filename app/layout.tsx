import type { Metadata } from "next";
import localFont from "next/font/local";
import { Protest_Strike } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

// font-[family-name:var(--font-aquire)]
const aquire = localFont({
  src: "./fonts/aquire.woff",
  variable: "--font-aquire",
});
// font-[family-name:var(--font-strike)]
const protest_strike = Protest_Strike({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-strike",
});
// font-[family-name:var(--font-lato)]
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
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
        className={`${aquire.variable} ${protest_strike.variable} ${lato.variable} antialiased bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 font-[family-name:var(--font-lato)]`}
      >
        {children}
      </body>
    </html>
  );
}
