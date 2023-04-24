import React from "react";

import { usePropertyStore } from "src/store/PropertyStore";

import "./style.scss";

export default function LocationOptions() {
    const locations = usePropertyStore((store) => store.locations);

    return (
        <div className="location-options-wrapper">
            {locations.map((location, index) => (
                <div key={index} className="location-option">
                    <p className="location">
                        <span className="location-pin">📍</span>
                        {location}
                    </p>
                </div>
            ))}
        </div>
    );
}
