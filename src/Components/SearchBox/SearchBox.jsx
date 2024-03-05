import React, { useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LuggageIcon from "@mui/icons-material/Luggage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SearchIcon from "@mui/icons-material/Search";

import Radio from "@mui/material/Radio";

import "./SearchBox.css";

export default function SearchBox() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="SearchBox">
      <div className="SearchBox__category">
        <div className="SearchBox__category-boxes">
          <div className="SearchBox__category-box active">
            <FlightTakeoffIcon />
            <p className="SearchBox__category-box-text">پرواز ها</p>
          </div>
          <div className="SearchBox__category-box">
            <ApartmentIcon />
            <p className="SearchBox__category-box-text">هتل ها</p>
          </div>
          <div className="SearchBox__category-box">
            <LocalActivityIcon />
            <p className="SearchBox__category-box-text">فعالیت</p>
          </div>
          <div className="SearchBox__category-box">
            <DirectionsCarIcon />
            <p className="SearchBox__category-box-text">ماشین ها</p>
          </div>
          <div className="SearchBox__category-box">
            <ConfirmationNumberIcon />
            <p className="SearchBox__category-box-text">رزور ها</p>
          </div>
          <div className="SearchBox__category-box">
            <LuggageIcon />
            <p className="SearchBox__category-box-text">تور ها</p>
          </div>
        </div>
      </div>
      <div className="SearchBox__main">
        <div className="SearchBox__main-inputs">
          <div className="SearchBox__main-radio">
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <p>یک طرفه</p>
          </div>
          <div className="SearchBox__main-radio">
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
            <p>رفت و برگشت</p>
          </div>
        </div>
        <div className="SearchBox__main-boxes"></div>
      </div>
      <div className="SearchBox__btn"></div>
    </div>
  );
}
