import { create } from "zustand";

export const useGlobalStore = create((set) => ({
    isFilterMenuVisible: false,
    isLocationMenuActive: false,
    isGuestModifyMenuActive: false,
    setIsFilterMenuVisible: (value) => {
        set(() => ({ isFilterMenuVisible: value }));
    },
    setIsLocationMenuActive: (value) => {
        set(() => ({ isLocationMenuActive: value }));
    },
    setIsGuestModifyMenuActive: (value) => {
        set(() => ({ isGuestModifyMenuActive: value }));
    },
}));
