import React from "react";

import Image from "src/components/Image";
import PropertyInfo from "src/components/PropertyInfo";

import "./style.scss";

export default function PropertyCard({ propertyData }) {
    return (
        <div className="property-card-wrapper">
            <Image src={propertyData.photo} alt={propertyData.title} />
            <PropertyInfo propertyData={propertyData} />
            <p className="title">{propertyData.title}</p>
        </div>
    );
}
