import React from "react";

import { usePropertyStore } from "src/store/PropertyStore";
import { useGlobalStore } from "src/store/GlobalStore";

import "./style.scss";

export default function LocationOptions() {
    const locations = usePropertyStore((state) => state.locations);
    const setFilterBarLocationField = useGlobalStore(
        (state) => state.setFilterBarLocationField
    );

    const handleLocationClick = (location) => {
        setFilterBarLocationField(location);
    };

    return (
        <div className="location-options-wrapper">
            {locations.map((location, index) => (
                <div
                    key={index}
                    className="location-option"
                    onClick={() => handleLocationClick(location)}
                >
                    <p className="location">
                        <span className="location-pin">📍</span>
                        {location}, Finland
                    </p>
                </div>
            ))}
        </div>
    );
}
