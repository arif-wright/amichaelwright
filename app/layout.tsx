import type { Metadata } from "next";
import { Cinzel, Inter, Marcellus_SC } from "next/font/google";
import "./globals.css";
import { authorName, heroImage, seriesName, siteDescription, siteUrl } from "./site-data";

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
  metadataBase: new URL(siteUrl),
  applicationName: `${authorName} Author Site`,
  title: `${authorName} | ${seriesName}`,
  description: siteDescription,
  keywords: [
    "A. Michael Wright",
    "The Wellspring Saga",
    "The Shattered Pact",
    "The Fracture of Worlds",
    "epic fantasy books",
    "dark fantasy books",
    "mythic fantasy series",
    "indie fantasy author",
  ],
  authors: [{ name: authorName, url: siteUrl }],
  creator: authorName,
  publisher: authorName,
  category: "Books",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/images/favicon_32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon_48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/images/favicon.png",
        sizes: "1098x1098",
        type: "image/png",
      },
    ],
    shortcut: "/images/favicon_32.png",
    apple: [
      {
        url: "/images/favicon_180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/images/favicon_512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: `${seriesName} by ${authorName}`,
    description: siteDescription,
    url: siteUrl,
    siteName: `${authorName} | ${seriesName}`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: heroImage,
        width: 1456,
        height: 816,
        alt: `${seriesName} by ${authorName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${seriesName} by ${authorName}`,
    description: siteDescription,
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
