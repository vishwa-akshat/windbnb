import React from "react";

import Button from "/src/components/Button";

import { useGlobalStore } from "/src/store/GlobalStore";
import { usePropertyStore } from "/src/store/PropertyStore";

import "./style.scss";

export default function FilterBar() {
    const {
        setIsGuestModifyMenuActive,
        filterBarGuestsField,
        filterBarLocationField,
        setIsLocationMenuActive,
        isGuestModifyMenuActive,
        isLocationMenuActive,
        setIsFilterMenuVisible,
    } = useGlobalStore((state) => state);

    const { setLocationFilter, setGuestFilter } = usePropertyStore(
        (state) => state
    );

    const handleLocationOptionClick = () => {
        setIsGuestModifyMenuActive(false);
        setIsLocationMenuActive(true);
    };

    const handleGuestsOptionClick = () => {
        setIsGuestModifyMenuActive(true);
        setIsLocationMenuActive(false);
    };

    const handleFilterSearch = () => {
        if (isLocationMenuActive) {
            setLocationFilter(filterBarLocationField);
            setIsFilterMenuVisible(false);
        } else {
            setGuestFilter(filterBarGuestsField);
            setIsFilterMenuVisible(false);
        }
    };

    return (
        <div className="filter-bar-wrapper">
            <div
                className="location-wrapper"
                onClick={handleLocationOptionClick}
            >
                <p className="title">Location</p>
                <p className="location">{filterBarLocationField}, Finland</p>
                {isLocationMenuActive ? <div className="overlay" /> : <></>}
            </div>
            <div className="guest-wrapper" onClick={handleGuestsOptionClick}>
                <p className="title">Guests</p>
                <p className="guest">
                    {filterBarGuestsField === 0 ? "Add" : filterBarGuestsField}{" "}
                    guests
                </p>
                {isGuestModifyMenuActive ? <div className="overlay" /> : <></>}
            </div>
            <div className="search-wrapper">
                <Button text="Search" onClickHandler={handleFilterSearch} />
            </div>
        </div>
    );
}
