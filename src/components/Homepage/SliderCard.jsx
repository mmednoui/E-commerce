import React from "react";
import "./SliderCard.css";
function SliderCard({ avatar, opinion, name }) {
  return (
    <div className="sliderCard">
      <img src={avatar} className="avatar" />
      <h6>{opinion}</h6>
      <p>{name}</p>
    </div>
  );
}

export default SliderCard;
