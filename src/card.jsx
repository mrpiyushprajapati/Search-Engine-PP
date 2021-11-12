import React from "react";

function Card(props) {
  return (
    <div>
      <a href="">
        <h2>{props.mobj}</h2>
      </a>
      <h2>{props.sobj}</h2>
    </div>
  );
}

export default Card;
