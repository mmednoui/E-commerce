import React from "react";
import "./BlogDetailCard.css";
function BlogDetailCard() {
  return (
    <div className="blogDetailCard">
      <div className="blogDetailCardinfo">
        <div>
          <p>Date:</p>
          <span>22. 6. 2020</span>
        </div>
        <div>
          <p>Category:</p>
          <span>Dinner</span>
        </div>
        <div>
          <p>Author:</p>
          <span>Admin</span>
        </div>
      </div>
      <h6>
        Space for your heading, can be larger so don’t worry - large heading
        looks better
      </h6>
    </div>
  );
}

export default BlogDetailCard;
