import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoCurency",
  description: "Live crypto price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
