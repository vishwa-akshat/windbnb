import React from "react";

import "./style.scss";

export default function PropertyType({ type, beds }) {
    return (
        <div className="property-type">
            {type}
            {beds ? <span className="beds"> . {beds} beds</span> : null}
        </div>
    );
}
