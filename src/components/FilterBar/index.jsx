import React from "react";

import Button from "src/components/Button";

import "./style.scss";

export default function FilterBar() {
    return (
        <div className="filter-bar-wrapper">
            <div className="location-wrapper">
                <p className="title">Location</p>
                <p className="location">Helsinki, Finland</p>
            </div>
            <div className="guest-wrapper">
                <p className="title">Guests</p>
                <p className="guest">Add guests</p>
            </div>
            <div className="search-wrapper">
                <Button text="Search" />
            </div>
        </div>
    );
}
