
import { createClient } from '@supabase/supabase-js';

// Supabase credentials should be stored in environment variables
// For now, we'll use placeholders that will be replaced with Supabase secrets
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
