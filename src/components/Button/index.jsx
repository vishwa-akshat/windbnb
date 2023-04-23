import React from "react";

import "./style.scss";

export default function Button({ text }) {
    return (
        <button className="btn">
            <span className="search-icon">⌕</span>
            {text}
        </button>
    );
}
