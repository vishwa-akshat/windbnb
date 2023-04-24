import React from "react";

import "./style.scss";

export default function Counter({
    count,
    handleIncreaseCount,
    handleDecreaseCount,
}) {
    return (
        <div className="counter-wrapper">
            <button className="counter-btn" onClick={handleDecreaseCount}>
                -
            </button>
            <span className="count">{count}</span>
            <button className="counter-btn" onClick={handleIncreaseCount}>
                +
            </button>
        </div>
    );
}
