import React from "react";
import Plan from "./Plan";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import { setMonthly } from "../reducer/timelineReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "..";
import { setStep } from "../reducer/stepReducer";

export default function Step2() {
  const monthly = useSelector((state) => state.timelineReducer);
  const step = useSelector((state) => state.stepReducer);
  let dispatch = useDispatch();

  function slide() {
    dispatch(setMonthly());
  }

  function back() {
    dispatch(setStep(step - 1));
  }

  function next() {
    dispatch(setStep(step + 1));
  }

  return (
    <div>
      <div className="stepCard">
        <div className="title">
          <h2>Select your plan</h2>
          <p className="smallGrey">
            You have the option of monthly or yearly billing
          </p>
        </div>
        {monthly === true && (
          <div className="planBox">
            <Plan img={arcade} name="Arcade" price={9} />
            <Plan img={advanced} name="Advanced" price={12} />
            <Plan img={pro} name="Pro" price={15} />
          </div>
        )}
        {monthly === false && (
          <div className="planBox">
            <Plan img={arcade} name="Arcade" price={100} />
            <Plan img={advanced} name="Advanced" price={200} />
            <Plan img={pro} name="Pro" price={300} />
          </div>
        )}
        <div className="timeline">
          <label>Monthly</label>
          <div className="slider" onClick={slide}>
            <div
              className="ball"
              style={{
                left: monthly ? "3px" : "17px",
              }}
            ></div>
          </div>
          <label>Yearly</label>
        </div>

        <button onClick={back} className="buttonBack">
          Go Back
        </button>
        <button onClick={next} className="buttonNext">
          Next step
        </button>
      </div>
    </div>
  );
}
