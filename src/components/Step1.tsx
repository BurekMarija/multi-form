import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "..";
import { setStep } from "../reducer/stepReducer";
import { setName, setEmail, setPhone } from "../reducer/dataReducer";

export default function Step1() {
  const data = useSelector((state) => state.dataReducer);
  const step = useSelector((state) => state.stepReducer);
  let dispatch = useDispatch();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.getAttribute("name") === "username") {
      dispatch(setName(event.target.value));
    }
    if (event.target.getAttribute("name") === "email") {
      dispatch(setEmail(event.target.value));
    }
    if (event.target.getAttribute("name") === "phone") {
      dispatch(setPhone(event.target.value));
    }
  }

  function nextStep() {
    dispatch(setStep(step + 1));
  }

  console.log(data);
  console.log(data.name);
  return (
    <div className="stepCard">
      <div className="title">
        <h2>Personal info</h2>
        <p className="smallGrey">
          Plese provide your name, email address and phone number
        </p>
      </div>
      <div className="userInfo">
        <label>Name</label>
        <input
          onChange={handleChange}
          name="username"
          type="username"
          //value={data.name}
          placeholder="Name"
        ></input>
        <label>Email Adress</label>
        <input
          required
          onChange={handleChange}
          name="email"
          type="email"
          //value={data.email}
          placeholder="email"
        ></input>
        <label>Phone</label>
        <input
          required
          onChange={handleChange}
          type="tel"
          name="phone"
          placeholder="e.g. +1234567890"
        ></input>
      </div>
      <button className="buttonNext" onClick={nextStep}>
        Next step
      </button>
    </div>
  );
}
