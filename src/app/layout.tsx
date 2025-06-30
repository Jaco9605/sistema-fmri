// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Importa los nuevos componentes
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panel de Control con Next.js",
  description: "Un layout de dashboard profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 2. El body será el contenedor flex principal */}
      <body className={`${inter.className} flex h-screen bg-gray-100`}>
        {/* El Sidebar se coloca directamente aquí */}
        <Sidebar />

        {/* Este div agrupará la cabecera y el contenido principal */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          {/* La prop 'children' renderizará el contenido de la página actual aquí */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}