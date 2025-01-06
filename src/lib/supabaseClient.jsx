import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://buginhlzzjaakljubbfa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1Z2luaGx6emphYWtsanViYmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNDI4MjcsImV4cCI6MjA1MDcxODgyN30.19Qyc6Tl7b1RpCvFldwoMXKSLNOU6_RFpqN9g22SUVI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
