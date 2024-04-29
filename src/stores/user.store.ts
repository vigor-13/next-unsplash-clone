import { User } from '@supabase/supabase-js';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface UserState {
  user: User | null;
}

export interface UserAction {
  setUser: (data: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState & UserAction>()(
  devtools(
    immer((set) => ({
      user: null,
      setUser: (data) =>
        set((state) => {
          state.user = data;
        }),
      clearUser: () =>
        set((state) => {
          state.user = null;
        }),
    })),
  ),
);
