import { SupabaseClient } from '@supabase/supabase-js';
import { create } from 'zustand';

export interface SupabaseState {
  supabase: SupabaseClient | null;
}

export interface SupabaseAction {
  setSupabase: (client: SupabaseClient) => void;
}

export const useSupabaseStore = create<SupabaseState & SupabaseAction>(
  (set) => ({
    supabase: null,
    setSupabase: (client) => set((state) => ({ supabase: client })),
  }),
);
