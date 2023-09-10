import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ThushalTK Game Developer Portfolio",
  description:
    "This is the official game developer portfolio of Thushal Kulatilake",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ width: "100%", height: "100%", fontFamily: "Tenorite" }}
        className={inter.className}
      >
        <link href="https://fonts.cdnfonts.com/css/tenorite" rel="stylesheet" />

        {children}
      </body>
    </html>
  );
}
