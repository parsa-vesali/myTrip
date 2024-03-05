import React from "react";
import TopBar from "./TopBar/TopBar";
import NavBar from "./NavBar/NavBar";
import "./Header.css";
import HeaderMain from "./HeaderMain/HeaderMain";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <TopBar />
        <NavBar />
        <HeaderMain />
      </div>
    </header>
  );
}
