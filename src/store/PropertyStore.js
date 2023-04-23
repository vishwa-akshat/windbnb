import { create } from "zustand";

import PROPERTY_DATA from "src/stays.json";

export const usePropertyStore = create((set) => ({
    properties: PROPERTY_DATA,
}));
