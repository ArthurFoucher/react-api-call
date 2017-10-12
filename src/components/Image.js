import React from "react";
import "./Image.css";

function Image(props) {
  return (
    <div className="Image">
      <img src={props.src} alt={props.altValue} />
    </div>
  );
}

export default Image;
