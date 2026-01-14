import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AAG - Associação Anti Giba",
  description:
    "Unidos contra o terror desde 2016. Junte-se à nossa causa nobre e faça parte de um movimento que está mudando vidas.",
  keywords: ["AAG", "Associação Anti Giba", "movimento", "resistência"],
  authors: [{ name: "AAG" }],
  openGraph: {
    title: "AAG - Associação Anti Giba",
    description: "Unidos pela sanidade, juntos pela paz",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
