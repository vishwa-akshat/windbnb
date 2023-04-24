import React from "react";

import Counter from "src/components/Counter";

import "./style.scss";

export default function GuestModify({
    title,
    range,
    count,
    handleIncreaseCount,
    handleDecreaseCount,
}) {
    return (
        <div className="guest-modify-wrapper">
            <p className="title">{title}</p>
            <p className="age-range">Ages {range}</p>
            <Counter
                count={count}
                handleIncreaseCount={handleIncreaseCount}
                handleDecreaseCount={handleDecreaseCount}
            />
        </div>
    );
}
