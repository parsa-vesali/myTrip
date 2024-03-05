import React from "react";
import Typewriter from "typewriter-effect";
import "./HeaderMain.css";
export default function HeaderMain() {
  return (
    <div className="HeaderMain">
      <h1 className="HeaderMain__title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("جهان را با هم کاوش کنید!")
              .callFunction(() => {})
              .pauseFor(2500)
              .deleteAll()
              .typeString("شرکت هواپیمایی مای تریپ")
              .callFunction(() => {})
              .pauseFor(2500)
              .start();
          }}
          options={{
            loop: true,
          }}
        />
      </h1>
      <h4 className="HeaderMain__text">
        پرواز، هتل، تور، ماشین و بسته های عالی را پیدا کنید
      </h4>
    </div>
  );
}
