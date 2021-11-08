import React from "react";
import "./Content.css";
import Heading from "./Heading";
import Products from "./Products";
function Content() {
  return (
    <div className="content">
      <Heading />
      <Products />
    </div>
  );
}

export default Content;
