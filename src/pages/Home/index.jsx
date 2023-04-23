import React from "react";

import Navbar from "src/components/Navbar";
import StayHeader from "src/components/StayHeader";
import PropertyList from "src/components/PropertyList";

import "./style.scss";

export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <StayHeader />
            <PropertyList />
        </div>
    );
}
