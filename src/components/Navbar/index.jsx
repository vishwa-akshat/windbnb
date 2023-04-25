import React from "react";

import Logo from "/src/assets/logo.svg";

import FilterButton from "/src/components/FilterButton";

import "./style.scss";

export default function Navbar() {
    return (
        <div className="navbar-wrapper">
            <img className="logo" src={Logo} alt="windbnb" />
            <FilterButton />
        </div>
    );
}
