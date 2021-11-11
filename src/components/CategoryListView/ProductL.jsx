import React from "react";
import "./ProductL.css";
function ProductL() {
  return (
    <div className="productL">
      <img src="assets/product.png" alt="" />
      <div className="productL_content">
        <div className="productL_left">
          <div className="productL_left_top">
            <h6>Product Title</h6>
            <p>Space for a small product description </p>
            <div className="productLStars">
              <div class="productLRating productRating2">
                <a href="#5" title="Give 5 stars">
                  ★
                </a>
                <a href="#4" title="Give 4 stars">
                  ★
                </a>
                <a href="#3" title="Give 3 stars">
                  ★
                </a>
                <a href="#2" title="Give 2 stars">
                  ★
                </a>
                <a href="#1" title="Give 1 star">
                  ★
                </a>
              </div>
            </div>
          </div>
          <div className="productL_left_bottom">
            <div>
              <p>Fresheness</p>
              <p>
                {" "}
                <span className="green">New</span> (Extra fresh)
              </p>
            </div>{" "}
            <div>
              <p>Farm</p>
              <p>Grocery Tarm Fields</p>
            </div>
            <div>
              <p>Delivery</p>
              <p>Europe</p>
            </div>
            <div>
              <p>Stock</p>
              <p className="green">320 pcs</p>
            </div>
          </div>
        </div>
        <div className="productL_right">
          <div className="price">
            <h6>36.99 USD</h6>
            <p>48.56</p>
          </div>
          <div className="productL_right_midlle">
            <p>Free Shipping</p>
            <p>Delivery in 1 day</p>
          </div>
          <div className="productL_right_bottom">
            <button className="product_detail_button">
              Product Detail{" "}
              <i
                class="fa fa-angle-right "
                style={{
                  fontSize: "14px",
                  fontWeight: "bolder",
                  paddingLeft: "5px",
                }}
              ></i>
            </button>
            <button className="add_wishlist_button">
              <i
                class="far fa-heart"
                style={{
                  padding: "0 5px",
                }}
              ></i>
              Add to wish list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductL;
