import React from "react";

export default function MemeImage(props) {
  return (
    <div className="MemeImageContainer">
      <img src={props.image} width={900} height={700} />
      <div className="OverlayText">
        <h2>{props.TopText}</h2>
        <h2>{props.BottomText}</h2>
      </div>
    </div>
  );
}
