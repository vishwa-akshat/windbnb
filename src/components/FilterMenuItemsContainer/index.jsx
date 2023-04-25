import React from "react";

import LocationOptions from "/src/components/LocationOptions";
import GuestsModifyOptions from "/src/components/GuestsModifyOptions";

import { useGlobalStore } from "/src/store/GlobalStore";

import "./style.scss";

export default function FilterMenuItemsContainer() {
    const {
        isLocationMenuActive,
        isGuestModifyMenuActive,
        setFilterBarGuestsField,
        adultGuests,
        childGuests,
    } = useGlobalStore((state) => state);

    React.useEffect(() => {
        setFilterBarGuestsField();
    }, [adultGuests, childGuests]);

    return (
        <div className="filter-menu-items-container">
            {isLocationMenuActive ? <LocationOptions /> : <div></div>}
            {isGuestModifyMenuActive ? <GuestsModifyOptions /> : <></>}
        </div>
    );
}
