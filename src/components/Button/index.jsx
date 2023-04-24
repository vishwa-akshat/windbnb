import React from "react";

import "./style.scss";

export default function Button({ text, onClickHandler }) {
    return (
        <button className="btn" onClick={onClickHandler}>
            <span className="search-icon">⌕</span>
            {text}
        </button>
    );
}
