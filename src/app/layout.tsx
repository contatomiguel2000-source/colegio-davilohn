import type { Metadata } from "next";
import { Instrument_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Colégio Dávilohn | Educação Infantil ao Ensino Médio em Guarulhos",
  description:
    "Mais que uma escola, uma família. Desde 2001 em Guarulhos, da Educação Infantil ao Ensino Médio, com o Sistema Anglo de Ensino. Nota 4,8 no Google.",
  openGraph: {
    title: "Colégio Dávilohn",
    description: "Mais que uma escola, uma família. Educação Infantil ao Ensino Médio em Guarulhos.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${instrument.variable} ${baskerville.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
