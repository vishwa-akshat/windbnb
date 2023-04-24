import { create } from "zustand";

import PROPERTY_DATA from "src/stays.json";
import { useGlobalStore } from "./GlobalStore";

export const usePropertyStore = create((set, get) => ({
    properties: PROPERTY_DATA.filter(
        (property) => property.city === "Helsinki"
    ),
    locations: PROPERTY_DATA.map((property) => `${property.city}`).filter(
        (value, index, array) => array.indexOf(value) === index
    ),
    setLocationFilter: (location) => {
        set(() => ({
            properties: PROPERTY_DATA.filter(
                (property) => property.city === location
            ),
        }));
    },
    setGuestFilter: (guestCount) => {
        set(() => ({
            properties: PROPERTY_DATA.filter(
                (property) =>
                    property.city ===
                    useGlobalStore.getState().filterBarLocationField
            ).filter((property) => property.maxGuests > guestCount),
        }));
    },
}));
