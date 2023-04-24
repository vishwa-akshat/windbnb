import React from "react";

import GuestModify from "src/components/GuestModify";

import { useGlobalStore } from "src/store/GlobalStore";

import "./style.scss";

export default function GuestsModifyOptions() {
    const {
        adultGuests,
        childGuests,
        increaseAdultGuestCount,
        decreaseAdultGuestCount,
        increaseChildGuestCount,
        decreaseChildGuestCount,
    } = useGlobalStore((state) => state);

    return (
        <div className="guests-modify-option-wrapper">
            <GuestModify
                title="Adult"
                range="13 or above"
                count={adultGuests}
                handleIncreaseCount={increaseAdultGuestCount}
                handleDecreaseCount={decreaseAdultGuestCount}
            />
            <GuestModify
                title="Children"
                range="2-12"
                count={childGuests}
                handleIncreaseCount={increaseChildGuestCount}
                handleDecreaseCount={decreaseChildGuestCount}
            />
        </div>
    );
}
