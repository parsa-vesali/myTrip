import React from "react";
import TopBar from "./TopBar/TopBar";
import NavBar from "./NavBar/NavBar";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <TopBar />
        <NavBar />
      </div>
    </header>
  );
}
