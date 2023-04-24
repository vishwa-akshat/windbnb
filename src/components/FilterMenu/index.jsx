import React from "react";

import FilterBar from "src/components/FilterBar";
import FilterMenuItemsContainer from "src/components/FilterMenuItemsContainer";

import { useGlobalStore } from "src/store/GlobalStore";

import "./style.scss";

export default function FilterMenu() {
    const isFilterMenuVisible = useGlobalStore(
        (state) => state.isFilterMenuVisible
    );

    if (!isFilterMenuVisible) {
        return <></>;
    }

    return (
        <div className="filter-menu-wrapper">
            <FilterBar />
            <FilterMenuItemsContainer />
        </div>
    );
}
