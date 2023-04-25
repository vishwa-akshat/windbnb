import React from "react";

import FilterBar from "/src/components/FilterBar";
import FilterMenuItemsContainer from "/src/components/FilterMenuItemsContainer";
import Button from "/src/components/Button";

import { useGlobalStore } from "/src/store/GlobalStore";
import { usePropertyStore } from "/src/store/PropertyStore";

import "./style.scss";

export default function FilterMenu() {
    const {
        isLocationMenuActive,
        isFilterMenuVisible,
        setIsFilterMenuVisible,
        filterBarLocationField,
        filterBarGuestsField,
    } = useGlobalStore((state) => state);

    const { setLocationFilter, setGuestFilter } = usePropertyStore(
        (state) => state
    );

    if (!isFilterMenuVisible) {
        return <></>;
    }

    const handleFilterSearch = () => {
        if (isLocationMenuActive) {
            setLocationFilter(filterBarLocationField);
            setIsFilterMenuVisible(false);
        } else {
            setGuestFilter(filterBarGuestsField);
            setIsFilterMenuVisible(false);
        }
    };

    const handleMenuClose = () => setIsFilterMenuVisible(false);

    return (
        <div className="filter-menu-wrapper">
            <div className="filter-menu-header-mobile">
                <p className="header-title">Edit your search</p>
                <button className="close-menu" onClick={handleMenuClose}>
                    ✖
                </button>
            </div>
            <FilterBar />
            <FilterMenuItemsContainer />
            <div className="search-btn-wrapper-mobile">
                <Button text="Search" onClickHandler={handleFilterSearch} />
            </div>
        </div>
    );
}
