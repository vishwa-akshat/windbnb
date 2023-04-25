import React from "react";

import { useGlobalStore } from "/src/store/GlobalStore";

import "./style.scss";

export default function FilterButton() {
    const setIsFilterMenuVisible = useGlobalStore(
        (state) => state.setIsFilterMenuVisible
    );
    const setIsLocationMenuActive = useGlobalStore(
        (state) => state.setIsLocationMenuActive
    );
    const setIsGuestModifyMenuActive = useGlobalStore(
        (state) => state.setIsGuestModifyMenuActive
    );
    const filterBarLocationField = useGlobalStore(
        (state) => state.filterBarLocationField
    );

    const handleLocationFilterClick = () => {
        setIsFilterMenuVisible(true);
        setIsLocationMenuActive(true);
        setIsGuestModifyMenuActive(false);
    };

    const handleGuestsFilterClick = () => {
        setIsFilterMenuVisible(true);
        setIsGuestModifyMenuActive(true);
        setIsLocationMenuActive(false);
    };

    return (
        <div className="filter-btn-wrapper">
            <div className="location" onClick={handleLocationFilterClick}>
                {filterBarLocationField}, Finland
            </div>
            <div className="guest" onClick={handleGuestsFilterClick}>
                Add guests
            </div>
            <div className="search-icon" onClick={handleLocationFilterClick}>
                ⌕
            </div>
        </div>
    );
}
