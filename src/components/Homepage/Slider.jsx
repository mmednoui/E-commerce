import React from "react";
import "./Slider.css";
import SliderCard from "./SliderCard";
function Slider() {
  return (
    <div className="slider">
      <div className="blur">
        <div className="blurR"></div>
        <i
          class="fa fa-chevron-circle-right"
          style={{
            position: "absolute",
            right: "12px",
            zIndex: "2",
            bottom: "140px",
            fontSize: "27px",
          }}
        ></i>
      </div>
      <div className="blur">
        <div className="blurL"></div>

        <i
          class="fa fa-chevron-circle-left"
          style={{
            fontSize: "27px",
            position: "absolute",
            left: "12px",
            zIndex: "2",
            bottom: "140px",
          }}
        ></i>
      </div>
      <div className="header">
        <p>Our customers says</p>
        <button>
          Button
          <i
            class="fa fa-angle-right green"
            style={{
              fontSize: "14px",
              fontWeight: "bolder",
              paddingLeft: "10px",
            }}
          ></i>
        </button>
      </div>
      <div className="cards">
        <SliderCard
          avatar="assets/avatar.png"
          opinion="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
          name="Name and Surnamer"
        />{" "}
        <SliderCard
          avatar="assets/avatar.png"
          opinion="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
          name="Name and Surnamer"
        />{" "}
        <SliderCard
          avatar="assets/avatar.png"
          opinion="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
          name="Name and Surnamer"
        />{" "}
        <SliderCard
          avatar="assets/avatar.png"
          opinion="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “"
          name="Name and Surnamer"
        />
      </div>
    </div>
  );
}

export default Slider;
