import React from "react";
import { useSelector } from "..";
import Buttons from "./Buttons";

export default function Step4() {
  const data = useSelector((state) => state.dataReducer);
  return (
    <div>
      <div className="title">
        <h2>Finishing up</h2>
        <p className="smallGrey">
          Double-check everything looks OK before confirming
        </p>
        <div className="summary">
          <div>{data.plan.name}</div>
          <div>{data.plan.price}</div>
        </div>
      </div>
      <Buttons />
    </div>
  );
}
