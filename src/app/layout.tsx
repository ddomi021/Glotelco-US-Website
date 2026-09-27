import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glotelco | Business Phone System Installation in Massachusetts & New England",
  description:
    "Glotelco installs business phone systems for companies across Massachusetts and New England. Over 15 years in business and more than 3,500 customers.",
  openGraph: {
    title: "Glotelco | Business Phone System Installation in New England",
    description:
      "Business phone system installation based in Massachusetts, serving all of New England.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${figtree.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
