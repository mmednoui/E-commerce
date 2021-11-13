import React from "react";
import BlogDetailCard from "./BlogDetailCard";

function BlogDetail() {
  return (
    <div className="blogDetail">
      {" "}
      <div className="Categories_header">
        <p> Homepage </p>
        <p style={{ margin: "0 10px" }}>/</p>
        <p>Fruit and vegetables</p>
        <p style={{ margin: "0 10px" }}>/</p>
        <h6>Carrots from Tomissy Farm</h6>
      </div>
      <BlogDetailCard />
    </div>
  );
}

export default BlogDetail;
