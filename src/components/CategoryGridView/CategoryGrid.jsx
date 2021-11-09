import React from "react";
import Filter from "./Filter";
import "./CategoryGrid.css";
import CatGridContent from "./CatGridContent";
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
      <CatGridContent />
    </div>
  );
}

export default CategoryGrid;
