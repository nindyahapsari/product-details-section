import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Details Section",
  description: "Product details section for a clothing store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
