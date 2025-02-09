import clsx from "clsx";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./componentes/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Projeto Commerce",
  description:
    "Projeto Commerce usando a versão Next.js 15, para minha aprendizagem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={clsx("bg-slate-700")}>
          <Navbar />
          <main className="bg-slate-600 h-screen p-16">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}

// `${geistSans.variable} ${geistMono.variable} antialiased`
