import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "..";
import { setStep } from "../reducer/stepReducer";

interface Props {
  isOn: boolean;
  index: number;
  name: string;
}

export default function Step(props: Props) {
  const step = useSelector((state) => state.stepReducer);
  const dispatch = useDispatch();

  console.log(step);
  function klik() {
    dispatch(setStep(props.index));
    console.log(step);
  }

  return (
    <div className="step" onClick={klik}>
      <div
        className="stepNumber"
        style={{
          backgroundColor: step === props.index ? "LightBlue" : "initial",
          color: step === props.index ? "Black" : "White",
        }}
      >
        {props.index}
      </div>
      <div className="stepInfo">
        <div className="stepIndex">Step {props.index}</div>
        <div className="stepName">{props.name}</div>
      </div>
    </div>
  );
}
