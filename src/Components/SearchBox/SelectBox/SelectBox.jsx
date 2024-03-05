import React from "react";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import "./SelectBox.css";
export default function SelectBox({ mainTitle, icon, title, subtitle }) {
  return (
    <div className="SearchBox__main-box">
      <div className="SearchBox__main-box-icon">
        <p className="SearchBox__main-box-text">{mainTitle}</p>
        {icon}
      </div>
      <input
        className="SearchBox__main-box-input"
        type="text"
        placeholder={title}
      ></input>
      <p className="SearchBox__main-box-subttitle">{subtitle}</p>
    </div>
  );
}
