import React from "react";
import "./HeadingCard.css";
function HeadingCard({ banner, space, read }) {
  return (
    <div className="headingCard">
      <div>
        <p>{banner}</p>
        <h6>{space}</h6>
      </div>
      <button>
        {read}{" "}
        <i
          class="fa fa-angle-right green"
          style={{
            fontSize: "14px",
            fontWeight: "bolder",
            paddingLeft: "5px",
          }}
        ></i>
      </button>
    </div>
  );
}

export default HeadingCard;
