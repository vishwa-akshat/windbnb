import React from "react";

import PropertyCard from "src/components/PropertyCard";

import PROPERTY_DATA from "src/stays.json";

import "./style.scss";

export default function PropertyList() {
    return (
        <div className="property-list-wrapper">
            {PROPERTY_DATA.map((property) => (
                <PropertyCard key={property.id} propertyData={property} />
            ))}
        </div>
    );
}
