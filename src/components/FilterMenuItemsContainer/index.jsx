import React from "react";

import LocationOptions from "src/components/LocationOptions";
import GuestsModifyOptions from "src/components/GuestsModifyOptions";

import "./style.scss";

export default function FilterMenuItemsContainer() {
    return (
        <div className="filter-menu-items-container">
            <LocationOptions />
            <GuestsModifyOptions />
        </div>
    );
}
