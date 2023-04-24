import { create } from "zustand";

import PROPERTY_DATA from "src/stays.json";

export const usePropertyStore = create((set) => ({
    properties: PROPERTY_DATA,
    locations: PROPERTY_DATA.map(
        (property) => `${property.city}, ${property.country}`
    ).filter((value, index, array) => array.indexOf(value) === index),
}));
