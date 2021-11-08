import React from "react";
import Filter from "./Filter";
import "./CategoryGrid.css";
function CategoryGrid() {
  return (
    <div className="cat_grid">
      <div className="Categories_header">
        <p> Homepage </p>
        <p style={{ margin: "0 10px" }}>/</p>
        <h6>Fruit and vegetables</h6>
      </div>
      <h3>Fruit and vegetables</h3>
      <Filter />
      <div className="applied_filters">
        <p> Applied filters :</p>
        <div
          className="percent green"
          style={{ position: "relative", width: "7%", margin: "-25px 10px" }}
        >
          Selected filter{" "}
          <span style={{ opacity: ".5", margin: "0 5px" }}>x</span>
        </div>{" "}
        <div
          className="percent green"
          style={{ position: "relative", width: "7%", margin: "-25px 10px" }}
        >
          Selected filter{" "}
          <span style={{ opacity: ".5", margin: "0 5px" }}>x</span>
        </div>
      </div>
      <div className="gridContent"></div>
    </div>
  );
}

export default CategoryGrid;
