import React from "react";
import "./SectionTitle.css";
export default function SectionTitle({ btnTitle, title }) {
  return (
    <div className="SectionTitle">
      <div className="SectionTitle__text">
        <span className="SectionTitle__btn app__btn">{btnTitle}</span>
        <h2 className="SectionTitle__title">{title}</h2>
      </div>
    </div>
  );
}
