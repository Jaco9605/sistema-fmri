// src/components/UserList.tsx

'use client'; // Marcamos este componente como de cliente para que se ejecute en el navegador

import { useState, useEffect } from 'react';
import { supabase } from '@/supabase/supabaseClient'; // Importamos nuestro cliente de Supabase

// 1. (Opcional pero recomendado) Definimos una interfaz para la estructura de nuestros datos.
//    Esto nos da autocompletado y previene errores de tipeo.
interface User {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string | null; // El teléfono podría ser nulo si no es obligatorio
}

export default function UserList() {
  // 2. Creamos los estados para manejar los datos, el estado de carga y los errores
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Usamos useEffect para obtener los datos cuando el componente se monta por primera vez
  useEffect(() => {
    // Definimos una función asíncrona dentro del efecto para poder usar await
    const fetchUsers = async () => {
      try {
        setLoading(true); // Empezamos a cargar

        // 4. Hacemos la consulta a Supabase
        const { data, error } = await supabase
          .from('sius_2025') // El nombre EXACTO de tu tabla
          .select('nombre, apellido, email, telefono'); // Las columnas que quieres traer

        // Si Supabase devuelve un error en la consulta
        if (error) {
          throw error;
        }

        // Si todo sale bien, guardamos los datos en nuestro estado
        if (data) {
          setUsers(data);
        }
      } catch (err: unknown) {
        // Si ocurre cualquier otro error, lo guardamos en nuestro estado de error
        console.error("Error al obtener los usuarios:", err);
        setError(`No se pudieron cargar los datos: ${err.message}`);
      } finally {
        // Al final de todo (éxito o error), dejamos de cargar
        setLoading(false);
      }
    };

    fetchUsers(); // Ejecutamos la función
  }, []); // El array vacío [] significa que este efecto se ejecuta solo una vez

  // 5. Renderizamos la interfaz dependiendo de los estados

  // Si está cargando, mostramos un mensaje
  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  // Si hubo un error, lo mostramos
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  // Si todo está bien, mostramos la lista de usuarios
  return (
    <div>
      <h1>Lista de Usuarios de &quot;sius_2025&quot;</h1>
      {users.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {users.map((user, index) => (
            <li key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
              <strong>Nombre:</strong> {user.nombre} {user.apellido}
              <br />
              <strong>Email:</strong> {user.email}
              <br />
              <strong>Teléfono:</strong> {user.telefono || 'No disponible'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron usuarios en la tabla.</p>
      )}
    </div>
  );
}