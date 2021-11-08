import React from "react";
import "./Heading.css";
import HeadingCard from "./HeadingCard";
function Heading() {
  return (
    <div className="heading">
      <HeadingCard
        banner="Banner subfocus"
        space="Space for heading"
        read="Read recepies"
      />{" "}
      <HeadingCard
        banner="Banner subfocus"
        space="Space for heading"
        read="Read recepies"
      />
    </div>
  );
}

export default Heading;
