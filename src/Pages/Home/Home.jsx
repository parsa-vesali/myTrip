import React from "react";
import "./Home.css";
import Header from "../../Components/Layout/Header/Header";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Feacher from "../../Components/Feacher/Feacher";

export default function Home() {
  return (
    <>
      <Header />
      <SearchBox />
      <Feacher />
    </>
  );
}
