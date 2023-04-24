import React from "react";

import LocationOptions from "src/components/LocationOptions";
import GuestsModifyOptions from "src/components/GuestsModifyOptions";

import { useGlobalStore } from "src/store/GlobalStore";

import "./style.scss";

export default function FilterMenuItemsContainer() {
    const isLocationMenuActive = useGlobalStore(
        (state) => state.isLocationMenuActive
    );
    const isGuestModifyMenuActive = useGlobalStore(
        (state) => state.isGuestModifyMenuActive
    );

    return (
        <div className="filter-menu-items-container">
            {isLocationMenuActive ? <LocationOptions /> : <></>}
            {isGuestModifyMenuActive ? <GuestsModifyOptions /> : <></>}
        </div>
    );
}
