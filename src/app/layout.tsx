import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

//inter is a font
const inter = Inter({ subsets: ["latin"] });

//metadata is a type
export const metadata: Metadata = {
  title: "Multi Step Form Sample",
  description: "Let's fun!",
};

//children is a type
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <title>Multi Step Form Example</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
