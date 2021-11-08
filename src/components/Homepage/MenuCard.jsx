import React from "react";
import "./MenuCard.css";
function MenuCard({ title, products, more }) {
  return (
    <div className="menuCard">
      <h6>{title}</h6>
      <div>
        {products.map((product) => {
          return (
            <a href="" className="green">
              {product}
            </a>
          );
        })}
      </div>
      <button>
        {more}{" "}
        <i
          class="fa fa-angle-right "
          style={{
            fontSize: "14px",
            fontWeight: "bolder",
            paddingLeft: "7px",
          }}
        ></i>
      </button>
    </div>
  );
}

export default MenuCard;
