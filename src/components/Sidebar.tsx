// src/components/Sidebar.tsx
"use client"; // ¡Directiva muy importante! Convierte este en un Componente de Cliente.

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importado desde 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname(); // Hook para obtener la ruta actual

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/acerca', label: 'Acerca de' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <aside className="h-screen w-64 bg-gray-800 text-white flex flex-col flex-shrink-0">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        Mi Panel
      </div>
      <nav className="flex-1 mt-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <span
                className={`block py-3 px-6 text-lg transition-colors duration-200 hover:bg-gray-700 ${
                  isActive ? 'bg-gray-900 font-semibold' : ''
                }`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="p-6 border-t border-gray-700">
        <p className="text-sm text-gray-400">© 2025 Mi Empresa</p>
      </div>
    </aside>
  );
}