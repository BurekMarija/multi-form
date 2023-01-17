import React from "react";
import Plan from "./Plan";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

export default function Step2() {
  return (
    <div>
      <div className="stepCard">
        <div className="title">
          <h2>Select your plan</h2>
          <p className="smallGrey">
            You have the option of monthly or yearly billing
          </p>
        </div>
        <div className="planBox">
          <Plan img={arcade} name="Arcade" price={9} />
          <Plan img={advanced} name="Advanced" price={12} />
          <Plan img={pro} name="Pro" price={15} />
        </div>
      </div>
    </div>
  );
}
