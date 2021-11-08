import React from "react";
import "./BlogBig.css";
function BlogBig() {
  return (
    <div style={{ position: "relative", flex: "4.5", height: "100%" }}>
      <div className="up">
        <div
          className="percent green"
          style={{ width: "70px", margin: "20px 0 0 0px" }}
        >
          Dinner tips
        </div>
      </div>
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
