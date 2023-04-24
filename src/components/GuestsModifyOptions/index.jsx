import React from "react";

import GuestModify from "src/components/GuestModify";

import "./style.scss";

export default function GuestsModifyOptions() {
    return (
        <div className="guests-modify-option-wrapper">
            <GuestModify title="Adult" />
            <GuestModify title="Children" />
        </div>
    );
}
