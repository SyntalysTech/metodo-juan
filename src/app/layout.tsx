import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Método Juan | Entrena tus oposiciones",
  description: "Plataforma de entrenamiento de tests para alumnos que se preparan oposiciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased font-sans bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
