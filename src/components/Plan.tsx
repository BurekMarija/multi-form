import React from "react";

interface Props {
  img: string;
  name: string;
  price: number;
}

export default function Plan(props: Props) {
  return (
    <div className="plan">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p className="smallGrey">${props.price}/mo</p>
    </div>
  );
}
