import React from "react";

import { usePropertyStore } from "/src/store/PropertyStore";

import "./style.scss";

export default function StayHeader() {
    const properties = usePropertyStore((state) => state.properties);
    return (
        <div className="header">
            <h1 className="title">Stays in Finland</h1>
            <div className="property-count">
                {properties.length > 0 ? `${properties.length}+` : 0} stays
            </div>
        </div>
    );
}
