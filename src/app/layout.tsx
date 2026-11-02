import type { Metadata } from "next";
import { Figtree, Barlow_Condensed } from "next/font/google";
import "../styles/global.css";
import { Header } from "../components/shared/Header";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { Footer } from "../components/shared/Footer";
const corpo = Figtree({ subsets: ["latin"], variable: "--font-corpo" });
const titulo = Barlow_Condensed({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-titulo" });

export const metadata: Metadata = {
  metadataBase: new URL("https://moradanovafc.com.br"),
  title: {
    default: "A.E.C. Morada Nova | Futebol de base em Macaíba (RN)",
    template: "%s | A.E.C. Morada Nova",
  },
  description:
    "Projeto social de futebol de base em Macaíba (RN). Campeões municipais Sub-15 e Sub-17. Conheça nossa história e apoie o projeto.",
  openGraph: {
    title: "A.E.C. Morada Nova | Futebol de base em Macaíba (RN)",
    description:
      "Projeto social de futebol de base em Macaíba (RN). Campeões municipais Sub-15 e Sub-17.",
    siteName: "A.E.C. Morada Nova",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`h-full antialiased ${corpo.variable} ${titulo.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
