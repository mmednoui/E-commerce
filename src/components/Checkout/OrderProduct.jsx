import React from "react";
import "./OrderProduct.css";
function OrderProduct() {
  return (
    <div className="orderProduct">
      <div className="orderProduct_left">
        <img src="assets/product.png" alt="" />
        <div>
          <i class="far fa-heart" style={{ color: "#E6704B" }}></i>
          <p>Wishlist</p>
        </div>
        <div>
          <i class="far fa-file-archive" style={{ color: "#E6704B" }}></i>
          <p>Compare</p>
        </div>
        <div>
          <i class="fas fa-times"></i>
          <p>Remove</p>
        </div>
      </div>
      <div className="orderProduct_right">
        <h6>Product title</h6>
        <div className="orderProduct_right_details">
          <div>
            <p>Farm:</p>
            <span>Tharamis Farm</span>
          </div>
          <div>
            <p>Freshness:</p>
            <span>1 day old</span>
          </div>
        </div>
        <div class="order_rating order_rating2">
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
        <div className="orderProduct_right_price">
          <div className="orderProduct_right_price_price">
            <h6>36.99 USD</h6>
            <p>48.56 USD</p>
          </div>
          <div className="orderProduct_right_price_quantity">
            1pcs |{" "}
            <select name="" id="">
              <option value="">Pcs</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;
