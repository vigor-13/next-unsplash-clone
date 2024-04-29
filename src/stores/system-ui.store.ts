import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { type FlashMessageData } from '@/components';

export interface SystemUIState {
  flashMessage: null | FlashMessageData;
}

export interface SystemUIAction {
  setFlashMessage: (data: FlashMessageData) => void;
  clearFlashMessage: () => void;
}

export const useSystemUIStore = create<SystemUIState & SystemUIAction>()(
  devtools(
    immer((set) => ({
      flashMessage: null,
      setFlashMessage: (data) =>
        set((state) => {
          state.flashMessage = data;
        }),
      clearFlashMessage: () =>
        set((state) => {
          state.flashMessage = null;
        }),
    })),
  ),
);
