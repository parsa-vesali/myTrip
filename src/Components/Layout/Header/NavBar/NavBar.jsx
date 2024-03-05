import React from "react";
import { Link } from "react-router-dom";
import { menuItem } from "../../../../Data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import "./NavBar.css";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__right">
        <div className="navbar__logo">
          <img
            src="./images/logo.png"
            alt="logo"
            className="navbar__logo-img"
          />
        </div>
        <ul className="navbar__list">
          {menuItem.map((item) => (
            <li key={item.id} className="navbar__list-item">
              <Link to={"/"} className="navbar__list-link">
                {item.title}
                {item.submenuIcon ? <KeyboardArrowDownIcon /> : ""}
              </Link>
              <ul className="navbar__list-submenu">
                <li className="navbar__list-submenu-item">آیتم 1</li>
                <li className="navbar__list-submenu-item">آیتم 2</li>
                <li className="navbar__list-submenu-item">آیتم 3</li>
                <li className="navbar__list-submenu-item">آیتم 4</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar__left">
        <button className="navbar__left-btn app__btn">
          دریافت مشاوره
          <KeyboardBackspaceIcon />
        </button>
      </div>
    </div>
  );
}
