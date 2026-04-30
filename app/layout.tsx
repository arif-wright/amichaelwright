import type { Metadata } from "next";
import { Cinzel, Inter, Marcellus_SC } from "next/font/google";
import "./globals.css";
import { authorName, bookTitle, heroImage } from "./site-data";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const marcellusSc = Marcellus_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus-sc",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amichaelwright.com"),
  title: `${authorName} | ${bookTitle}`,
  description:
    "The official author site for A. Michael Wright and The Shattered Pact, an epic dark fantasy novel about a fractured world and the forces awakening beneath it.",
  openGraph: {
    title: `${bookTitle} by ${authorName}`,
    description:
      "An epic dark fantasy about a fractured world and the forces awakening beneath it.",
    type: "website",
    images: [
      {
        url: heroImage,
        width: 1456,
        height: 816,
        alt: `${bookTitle} by ${authorName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${bookTitle} by ${authorName}`,
    description:
      "An epic dark fantasy about a fractured world and the forces awakening beneath it.",
    images: [heroImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${inter.variable} ${marcellusSc.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
