import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import { Inter } from "next/font/google";
import "./globals.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-dark-cyan/theme.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paulina Flores",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <GoogleAnalytics />
        <body className={inter.className}>{children}</body>
      </html>
    </PrimeReactProvider>
  );
}
