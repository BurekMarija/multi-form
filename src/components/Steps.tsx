import React from "react";
import Step from "./Step";
import "../css/steps.css";

export default function Steps() {
  return (
    <div className="steps">
      <Step isOn={false} index={1} name={"YOUR INFO"} />
      <Step isOn={false} index={2} name={"SELECT PLAN"} />
      <Step isOn={false} index={3} name={"ADD-ONS"} />
      <Step isOn={false} index={4} name={"SUMMARY"} />
    </div>
  );
}
