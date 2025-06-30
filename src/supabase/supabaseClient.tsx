// src/lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

// 1. Se usa "process.env" en lugar de "import.meta.env"
// 2. Se usa el prefijo "NEXT_PUBLIC_" que configuramos en el archivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Es una muy buena práctica verificar que las variables de entorno realmente existen
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("La URL y la Anon Key de Supabase deben estar definidas en el archivo .env.local");
}

// Creamos y exportamos el cliente con las variables correctas
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// No necesitas hacer un "export default", una exportación nombrada es común y funciona perfecto.