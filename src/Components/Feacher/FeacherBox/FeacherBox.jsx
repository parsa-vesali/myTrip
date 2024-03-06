import React from "react";
import "./FeacherBox.css";
export default function FeacherBox({ icon, title, text }) {
  return (
    <div className="FeacherBox">
      <span className="FeacherBox__icon">{icon}</span>
      <h2 className="FeacherBox__title">{title}</h2>
      <p className="FeacherBox__text">{text}</p>
    </div>
  );
}
