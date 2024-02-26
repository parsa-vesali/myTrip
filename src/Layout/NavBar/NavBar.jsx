import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WalletIcon from "@mui/icons-material/Wallet";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__menu">
          <div className="navbar__menu-right">
            <div className="navbar__menu-logo">
              <img src="" alt="logo" />
              <h2>اسپرت</h2>
            </div>
            <div className="navbar__menu-search">
              <div className="menu-search">
                <button className="menu-search__icon">
                  <SearchIcon />
                </button>
                <input
                  className="menu-search__input"
                  type="text"
                  placeholder="جستجوی محصول مورد نظر ..."
                />
              </div>
            </div>
          </div>
          <div className="navbar__menu-left">
            <ul className="navbar__menu-list">
              <li className="navbar__menu-item">
                <Link className="navbar__menu-link" to={"/"}>
                  فروشگاه
                </Link>
              </li>
              <li className="navbar__menu-item">
                <Link className="navbar__menu-link" to={"/"}>
                  وبلاگ
                </Link>
              </li>
              <li className="navbar__menu-item">
                <Link className="navbar__menu-link" to={"/"}>
                  درباره ما
                </Link>
              </li>
              <li className="navbar__menu-item">
                <Link className="navbar__menu-link" to={"/"}>
                  تماس
                </Link>
              </li>
              <button className="navbar__menu-item">
                <Link className="navbar__menu-link" to={"/"}>
                  <LoginIcon />
                  ورود || ثبت نام
                </Link>
              </button>
            </ul>
          </div>
        </div>
        <div className="navbar__products">
          <div className="navbar__products-right">
            <ul className="navbar__products-list">
              <li className="navbar__products-item">
                <KeyboardArrowDownIcon />
                کفش ریباک
              </li>
              <li className="navbar__products-item">
                <KeyboardArrowDownIcon />
                کفش آدیداس
              </li>
              <li className="navbar__products-item">
                <KeyboardArrowDownIcon />
                کفش رونی
              </li>
              <li className="navbar__products-item">
                <KeyboardArrowDownIcon />
                کفش نایک
              </li>
            </ul>
          </div>
          <div className="navbar__products-left">
            <div className="navbar__products-wallet">
              <WalletIcon />
              <span>0 تومان</span>
            </div>
            <div className="navbar__products-bookmark">
              <BookmarkIcon />
            </div>
            <div className="navbar__products-favorite">
              <FavoriteBorderIcon />
            </div>
            <div className="navbar__products-support">
              <HelpIcon />
              پشتیبان و مشاوره فروش
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
