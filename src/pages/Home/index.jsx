import React from "react";

import Navbar from "src/components/Navbar";
import StayHeader from "src/components/StayHeader";

import "./style.scss";

export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <StayHeader />
        </div>
    );
}
