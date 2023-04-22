import React from "react";

import "./style.scss";

export default function FilterButton() {
    return (
        <div className="filter-btn-wrapper">
            <div className="location">Helsinki, Finland</div>
            <div className="guest">Add guests</div>
            <div className="search-icon">⌕</div>
        </div>
    );
}
