import React from "react";
import { useSelector } from "..";
import { setPlan } from "../reducer/dataReducer";
import { useDispatch } from "react-redux";

interface Props {
  img: string;
  name: string;
  price: number;
}

export default function Plan(props: Props) {
  const monthly = useSelector((state) => state.timelineReducer);
  const dispatch = useDispatch();
  function savePlan() {
    dispatch(setPlan(props.name));
  }

  return (
    <div className="plan" onClick={savePlan}>
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      {monthly && <p className="smallGrey">${props.price}/mo</p>}
      {!monthly && <p className="smallGrey">${props.price}/yr</p>}
    </div>
  );
}
