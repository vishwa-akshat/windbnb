import React from "react";

import { useGlobalStore } from "src/store/GlobalStore";

import "./style.scss";

export default function FilterButton() {
    const setIsFilterMenuVisible = useGlobalStore(
        (state) => state.setIsFilterMenuVisible
    );

    const handleFilterClick = () => setIsFilterMenuVisible(true);

    return (
        <div className="filter-btn-wrapper" onClick={handleFilterClick}>
            <div className="location">Helsinki, Finland</div>
            <div className="guest">Add guests</div>
            <div className="search-icon">⌕</div>
        </div>
    );
}
