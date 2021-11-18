import React from "react";
import "./Checkout.css";
import OrderProduct from "./OrderProduct";
function Checkout() {
  return (
    <div className="checkout">
      <div className="Categories_header">
        <p> Homepage </p>
        <p style={{ margin: "0 10px" }}>/</p>
        <h6>Checkout</h6>
      </div>
      <div className="checkout_content">
        <div className="checkout_content_form"></div>
        <div className="order_summary">
          <h6>Order Summary</h6>
          <span>
            Price can change depending on shipping method and taxes of your
            state.
          </span>
          <OrderProduct />
          <OrderProduct />
          <div className="order_tax">
            <div>
              <p>Subtotal</p>
              <p>73.98 USD</p>
            </div>
            <div>
              <p>Tax</p>
              <p>17% 16.53 USD</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>0 USD</p>
            </div>
          </div>
          <div className="promo_code">
            <input type="text" placeholder="Apply promo code" />
            <button>Apply now</button>
          </div>
          <div className="total_order">
            <div>
              <p>Total Order</p>
              <p className="delivery">Guaranteed delivery day: June 12, 2020</p>
            </div>
            <h5>89.84 USD</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
