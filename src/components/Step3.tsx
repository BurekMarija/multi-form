import React from "react";
import Add_on from "./Add_on";
import Buttons from "./Buttons";

export default function Step3() {
  return (
    <div>
      <div className="title">
        <h2>Pick add-ons</h2>
        <p className="smallGrey">Add-ons help enhance gaming experience</p>
      </div>
      <div className="add-ons">
        <Add_on name="Online service" product="Access to multipleyer games" />
        <Add_on name="Larger storage" product="Extra 1 TB of cloud save" />
        <Add_on
          name="Custumizable profile"
          product="Costume theme on your profile"
        />
      </div>
      <Buttons />
    </div>
  );
}
