import { create } from "zustand";

export const useGlobalStore = create((set, get) => ({
    isFilterMenuVisible: false,
    isLocationMenuActive: false,
    isGuestModifyMenuActive: false,
    filterBarLocationField: "Helsinki",
    adultGuests: 0,
    childGuests: 0,
    filterBarGuestsField: 0,
    setFilterBarGuestsField: () =>
        set({ filterBarGuestsField: get().adultGuests + get().childGuests }),
    setIsFilterMenuVisible: (value) => set({ isFilterMenuVisible: value }),
    setIsLocationMenuActive: (value) => set({ isLocationMenuActive: value }),
    setIsGuestModifyMenuActive: (value) =>
        set({ isGuestModifyMenuActive: value }),
    setFilterBarLocationField: (value) =>
        set({ filterBarLocationField: value }),
    increaseAdultGuestCount: () =>
        set((state) => ({ adultGuests: state.adultGuests + 1 })),
    decreaseAdultGuestCount: () =>
        set((state) => ({
            adultGuests:
                state.adultGuests > 0
                    ? state.adultGuests - 1
                    : state.adultGuests,
        })),
    increaseChildGuestCount: () =>
        set((state) => ({ childGuests: state.childGuests + 1 })),
    decreaseChildGuestCount: () =>
        set((state) => ({
            childGuests:
                state.childGuests > 0
                    ? state.childGuests - 1
                    : state.childGuests,
        })),
}));
