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
  const userPlan = useSelector((state) => state.dataReducer.plan);
  const dispatch = useDispatch();
  console.log(userPlan);
  let curPlan = { name: props.name, price: props.price };
  function savePlan() {
    dispatch(setPlan(curPlan));
  }

  return (
    <div
      className="plan"
      onClick={savePlan}
      style={{
        border:
          userPlan.name === props.name
            ? "1px solid hsl(243, 100%, 62%)"
            : "1px solid hsl(228, 100%, 84%)",
      }}
    >
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      {monthly && <p className="smallGrey">${props.price}/mo</p>}
      {!monthly && <p className="smallGrey">${props.price}/yr</p>}
    </div>
  );
}
