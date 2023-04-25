import React from "react";

import PropertyCard from "/src/components/PropertyCard";

import { usePropertyStore } from "/src/store/PropertyStore";

import "./style.scss";

export default function PropertyList() {
    const properties = usePropertyStore((state) => state.properties);

    return (
        <div className="property-list-wrapper">
            {properties.map((property) => (
                <PropertyCard key={property.id} propertyData={property} />
            ))}
        </div>
    );
}
