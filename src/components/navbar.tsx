import Link from 'next/link';

// Estilos básicos para el menú (puedes mejorarlos después)
const navStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
  padding: '1rem',
  backgroundColor: '#f0f0f0',
  borderBottom: '1px solid #ddd',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
};

export default function navbar() {
  return (
    <nav style={navStyles}>
      <Link href="/" style={linkStyles}>
        Inicio
      </Link>
      <Link href="/acerca" style={linkStyles}>
        Acerca de
      </Link>
      <Link href="/contacto" style={linkStyles}>
        Contacto
      </Link>
    </nav>
  );
}