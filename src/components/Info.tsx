import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useSelector } from "..";

export default function Info() {
  const step = useSelector((state) => state.stepReducer);
  return (
    <div className="info">
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
    </div>
  );
}
