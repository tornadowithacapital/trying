import { create } from "zustand";

interface AppState {
  page: number;
  isPlay: boolean;
  setPage: (page: number) => void;
  setIsPlay: (page: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  page: 0,
  setPage: (page) => set(() => ({ page })),
  isPlay: false,
  setIsPlay: (isPlay) => set(() => ({ isPlay })),
}));
