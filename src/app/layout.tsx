import type { Metadata } from "next";
import {Montserrat, Open_Sans} from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deivid Costa - Desenvolvedor FullStack",
  description: "Portfólio Pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${montserrat.variable} ${openSans.variable} w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
