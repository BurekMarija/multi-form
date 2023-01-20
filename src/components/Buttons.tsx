import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "..";
import { setStep } from "../reducer/stepReducer";

export default function Buttons() {
  const step = useSelector((state) => state.stepReducer);
  let dispatch = useDispatch();
  function back() {
    dispatch(setStep(step - 1));
  }

  function next() {
    dispatch(setStep(step + 1));
  }
  console.log(step);
  return (
    <div>
      {step > 1 && (
        <button onClick={back} className="buttonBack">
          Go Back
        </button>
      )}
      {step < 4 && (
        <button onClick={next} className="buttonNext">
          Next step
        </button>
      )}
    </div>
  );
}
