import React from "react";
import CategorySidebar from "./CategorySidebar";
import "./CatGridContent.css";
import GridProducts from "./GridProducts";
function CatGridContent() {
  return (
    <div className="catGridContent">
      <CategorySidebar />
      <GridProducts />
    </div>
  );
}

export default CatGridContent;
