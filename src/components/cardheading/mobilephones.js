// import React, { forwardRef } from "react";
import "./mobilephones.css";
// import forward from "./imgs/arrow-ios-forward-outline.svg";
import { RightOutlined } from "@ant-design/icons";
import Mobile from "../mobile/mobile";
import Phone from "../../Assets/nokia.webp";
import heart from "../../Assets/favorite-svgrepo-com.svg";
import berry from "../../Assets/blackberry.jpeg";
import lg from "../../Assets/lg-4.jpg";
import moto from "../../Assets/Motoqb.jpg";

function Mobilephones() {
  return (
    <>
      <div className="main-parent">
        <div className="child1">Mobile Phones</div>
        <div className="child2">
          View more{" "}
          <span className="child3">
            {" "}
            <RightOutlined color="#4077FF" />{" "}
          </span>
        </div>
      </div>
      <div className="abc_cards">
        <Mobile
          img1={Phone}
          img2={heart}
          price="3,000"
          title="Nokia 3310 unbreakable phone 12/256 Gb 2024 
        edition."
          loc="Gulshan-e-johar, Karachi"
          waeks="4 weeks ago"
        />
        <Mobile
          img1={berry}
          img2={heart}
          price="16,049.19"
          title="Unlocked Original BlackBerry 9720 3G 5MP Camera FM Radio GPS Cellphone Mini-SIM Pre-Owned · BlackBerry"
          loc="Orangi town 10, Karachi"
          waeks="2 weeks ago"
        />
        <Mobile
          img1={lg}
          img2={heart}
          price="65,000"
          title="New LG-G4 16/256 2024"
          loc="North Nazimabad - Block H, Karachi"
          waeks="2 weeks ago"
        />
        <Mobile
          img1={moto}
          img2={heart}
          price="12,000"
          title="New Motorola Keypad Mini 1TB phone only 2 month used."
          loc="Malir - Model town, Karachi"
          waeks="6 days ago"
        />
      </div>
    </>
  );
}

export default Mobilephones;
