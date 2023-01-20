import React from "react";

interface Props {
  name: string;
  product: string;
}

export default function Add_on(props: Props) {
  return (
    <div className="add-on">
      <input className="check" type="checkbox" name="add" />
      <div className="adOnInfo">
        <h3>{props.name}</h3>
        <p>{props.product}</p>
      </div>
      <div>price</div>
    </div>
  );
}
