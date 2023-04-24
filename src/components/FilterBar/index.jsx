import React from "react";

import Button from "src/components/Button";

import { useGlobalStore } from "src/store/GlobalStore";

import "./style.scss";

export default function FilterBar() {
    const isLocationMenuActive = useGlobalStore(
        (state) => state.isLocationMenuActive
    );
    const isGuestModifyMenuActive = useGlobalStore(
        (state) => state.isGuestModifyMenuActive
    );

    return (
        <div className="filter-bar-wrapper">
            <div className="location-wrapper">
                <p className="title">Location</p>
                <p className="location">Helsinki, Finland</p>
                {isLocationMenuActive ? <div className="overlay" /> : <></>}
            </div>
            <div className="guest-wrapper">
                <p className="title">Guests</p>
                <p className="guest">Add guests</p>
                {isGuestModifyMenuActive ? <div className="overlay" /> : <></>}
            </div>
            <div className="search-wrapper">
                <Button text="Search" />
            </div>
        </div>
    );
}
