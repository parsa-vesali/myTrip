import React from "react";
import FeacherBox from "./FeacherBox/FeacherBox";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import "./Feacher.css";
export default function Feacher() {
  return (
    <div className="container">
      <div className="Feacher">
        <FeacherBox
          title={"پوشش جهانی"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله میباشد."
          }
          icon={<TravelExploreIcon />}
        />
        <FeacherBox
          title={"بهترین کیفیت خدمات"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله میباشد."
          }
          icon={<EmojiEventsIcon />}
        />
        <FeacherBox
          title={"خدمات مشتریان 24/7"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله میباشد."
          }
          icon={<SupportAgentIcon />}
        />
      </div>
    </div>
  );
}
