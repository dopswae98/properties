import { Inter } from "next/font/google";

import "./globals.css";

import { constructMetadata } from "@/lib/utils";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
