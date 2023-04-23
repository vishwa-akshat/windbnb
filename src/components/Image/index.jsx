import React from "react";

import "./style.scss";

export default function Image({ src, alt }) {
    return <img className="property-image" src={src} alt={alt} />;
}
