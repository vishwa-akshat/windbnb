import React from "react";

import Counter from "src/components/Counter";

import "./style.scss";

export default function GuestModify({ title }) {
    return (
        <div className="guest-modify-wrapper">
            <p className="title">{title}</p>
            <p className="age-range">
                Ages {title === "Adult" ? "13 or above" : "2-12"}
            </p>
            <Counter />
        </div>
    );
}
