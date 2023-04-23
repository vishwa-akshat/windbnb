import React from "react";

import FilterBar from "src/components/FilterBar";

import { useGlobalStore } from "src/store/GlobalStore";

import "./style.scss";

export default function FilterMenu() {
    const isFilterMenuVisible = useGlobalStore(
        (state) => state.isFilterMenuVisible
    );

    // if (!isFilterMenuVisible) {
    //     return <></>;
    // }

    return (
        <div className="filter-menu-wrapper">
            <FilterBar />
        </div>
    );
}
