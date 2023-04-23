import { create } from "zustand";

export const useGlobalStore = create((set) => ({
    isFilterMenuVisible: false,
    setIsFilterMenuVisible: (value) => {
        set(() => ({ isFilterMenuVisible: value }));
    },
}));
