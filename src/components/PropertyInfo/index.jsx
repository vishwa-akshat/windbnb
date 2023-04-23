import React from "react";

import PropertyType from "src/components/PropertyType";
import PropertyRating from "src/components/PropertyRating";

import "./style.scss";

export default function PropertyInfo({ propertyData }) {
    console.log(propertyData);
    return (
        <div className="property-info-wrapper">
            <div className="property-info">
                <PropertyType
                    type={propertyData.type}
                    beds={propertyData.beds}
                />
            </div>
            <PropertyRating rating={propertyData.rating} />
        </div>
    );
}
