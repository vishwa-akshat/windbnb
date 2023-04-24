import React from "react";

import "./style.scss";

export default function Counter({ count = 0 }) {
    return (
        <div className="counter-wrapper">
            <button className="counter-btn">-</button>
            <span className="count">{count}</span>
            <button className="counter-btn">+</button>
        </div>
    );
}
