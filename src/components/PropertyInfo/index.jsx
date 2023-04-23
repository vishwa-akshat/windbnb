import React from "react";

import PropertyType from "src/components/PropertyType";
import PropertyRating from "src/components/PropertyRating";
import SuperHostTag from "src/components/SuperHostTag";

import "./style.scss";

export default function PropertyInfo({ propertyData }) {
    return (
        <div className="property-info-wrapper">
            <div className="property-info">
                {propertyData.superHost ? <SuperHostTag /> : null}
                <PropertyType
                    type={propertyData.type}
                    beds={propertyData.beds}
                />
            </div>
            <PropertyRating rating={propertyData.rating} />
        </div>
    );
}
