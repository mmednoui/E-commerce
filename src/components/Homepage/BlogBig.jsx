import React from "react";
import "./BlogBig.css";
function BlogBig() {
  return (
    <div
      style={{
        position: "relative",
        flex: "4.5",
        height: "100%",
        margin: "0 20px",
      }}
    >
      <div className="blog_percent green">Dinner tips</div>
      {"  "}
      <div className="up"></div>
      <div className="blogBig">
        <h6>Our chef tips for a great and tasty dinner ready in 20 minutes</h6>
        <div className="blogBig_bottom">
          <img src="assets/blog_avatar.png" className="blog_avatar" />
          <p>Author</p>
          <p>17.6.2020</p>
        </div>
      </div>
    </div>
  );
}

export default BlogBig;
