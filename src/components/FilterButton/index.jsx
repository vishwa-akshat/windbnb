import React from "react";

import { useGlobalStore } from "src/store/GlobalStore";

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

    const handleLocationFilterClick = () => {
        setIsFilterMenuVisible(true);
        setIsLocationMenuActive(true);
    };

    const handleGuestsFilterClick = () => {
        setIsFilterMenuVisible(true);
        setIsGuestModifyMenuActive(true);
    };

    return (
        <div className="filter-btn-wrapper">
            <div className="location" onClick={handleLocationFilterClick}>
                Helsinki, Finland
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
