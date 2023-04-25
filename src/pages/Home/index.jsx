import React from "react";

import Navbar from "/src/components/Navbar";
import StayHeader from "/src/components/StayHeader";
import PropertyList from "/src/components/PropertyList";
import FilterMenu from "/src/components/FilterMenu";

import "./style.scss";

export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <FilterMenu />
            <StayHeader />
            <PropertyList />
        </div>
    );
}
