import { ThemeProvider } from "./_components/theme-provider";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google"
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
  title: "Deivid Costa - Desenvolvedor Node",
  description: "Portfólio Pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${montserrat.variable} ${openSans.variable} w-full antialiased`}
        >
          {children}
        </body>
        </ThemeProvider >
    </html>
  );
}
