import type { Metadata } from "next";
import { Cinzel, Inter, Marcellus_SC } from "next/font/google";
import "./globals.css";

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
  title: "A. Michael Wright | The Shattered Pact",
  description:
    "The official author site for A. Michael Wright and The Shattered Pact, an epic dark fantasy novel about a fractured world and the forces awakening beneath it.",
  openGraph: {
    title: "The Shattered Pact by A. Michael Wright",
    description:
      "An epic dark fantasy about a fractured world and the forces awakening beneath it.",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630/12081f/d9b566?text=The+Shattered+Pact",
        width: 1200,
        height: 630,
        alt: "The Shattered Pact by A. Michael Wright",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shattered Pact by A. Michael Wright",
    description:
      "An epic dark fantasy about a fractured world and the forces awakening beneath it.",
    images: ["https://placehold.co/1200x630/12081f/d9b566?text=The+Shattered+Pact"],
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
