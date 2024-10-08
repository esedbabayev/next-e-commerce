// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/header";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "E-commerce",
//   description: "Generated by create next app",
// };

// Components
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
