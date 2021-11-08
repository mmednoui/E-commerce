import React from "react";
import "./BlogSmall.css";
function BlogSmall() {
  return (
    <div className="blogSmall">
      <div className="blogSmall_rightside">
        <h6>Salat is kinda good start to your morning routines</h6>
        <div className="blogSmall_bottom">
          <p>Author</p>
          <p>15. 6. 2020</p>
        </div>
      </div>
      <img
        src="assets/product.png"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
}

export default BlogSmall;
