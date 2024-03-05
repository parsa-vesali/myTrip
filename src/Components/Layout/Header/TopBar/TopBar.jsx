import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import "./TopBar.css";
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__right">
        <div className="topbar__right-social">
          <span className="topbar__right-social-icon">
            <TelegramIcon />
          </span>
          <span className="topbar__right-social-icon">
            <GitHubIcon />
          </span>
          <span className="topbar__right-social-icon">
            <XIcon />
          </span>
          <span className="topbar__right-social-icon">
            <InstagramIcon />
          </span>
        </div>
        <div className="topbar__right-info">
          <div className="topbar__right-social-info-text">
            <LocalPhoneIcon />
            <p>98 992 008 7317</p>
          </div>
          <div className="topbar__right-social-info-text">
            <p>parsavesali84@gmail.com</p>
            <EmailIcon />
          </div>
        </div>
      </div>
      <div className="topbar__left">
        <div className="topbar__left-links">
          <button className="topbar__left-link">
            <LoginIcon />
            وارد شدن
          </button>
          <button className="topbar__left-link ">
            <PersonIcon />
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}
