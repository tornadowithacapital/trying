import type { Metadata } from "next";
import { Lexend_Tera } from "next/font/google";
import "./globals.css";
import Header from "../components/_ui/_layout/header";
import Footer from "../components/_ui/_layout/footer";

const lexendTera = Lexend_Tera({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Obo",
  description: "REAL-TIME MEMPOOL MONITORING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/favicon.ico" sizes="any" />
      </head>
      <body className={`${lexendTera.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
