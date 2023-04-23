import React from "react";

import "./style.scss";

export default function PropertyRating({ rating }) {
    return (
        <div className="rating-wrapper">
            <span className="star">★</span>
            <p className="rating">{rating}</p>
        </div>
    );
}
