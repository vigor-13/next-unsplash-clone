import { User } from '@supabase/supabase-js';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { type PhotoDetail, type Photo } from '@/services';

export interface UserState {
  user: User | null;
  likes: {
    [id: string]: Photo | PhotoDetail;
  };
}

export interface UserAction {
  setUser: (data: User) => void;
  clearUser: () => void;

  toggleLikes: (data: Photo | PhotoDetail) => void;
}

export const useUserStore = create<UserState & UserAction>()(
  devtools(
    immer(
      persist(
        (set) => ({
          user: null,
          setUser: (data) =>
            set(
              (state) => {
                state.user = data;
              },
              false,
              'user/setUser',
            ),
          clearUser: () =>
            set(
              (state) => {
                state.user = null;
              },
              false,
              'user/clearUser',
            ),

          likes: {},
          toggleLikes: (data) =>
            set(
              (state) => {
                if (state.likes[data.id]) {
                  delete state.likes[data.id];
                } else {
                  state.likes[data.id] = data;
                }
              },
              false,
              'user/toggleLikes',
            ),
        }),
        {
          name: 'user-store',
        },
      ),
    ),
  ),
);
