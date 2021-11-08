import React from "react";
import "./Product.css";
function Product({
  productImg,
  productTitle,
  productDesc,
  productPrice,
  productBeforePrice,
  percentage,
}) {
  return (
    <div className="product">
      {percentage ? (
        <div className="percent green">
          - <span>{percentage}</span>%
        </div>
      ) : (
        ""
      )}

      <img src={productImg} alt="" />
      <div className="product_top">
        <h6>{productTitle}</h6>
        <p>{productDesc}</p>
      </div>
      <div className="product_bottom">
        <div className="price">
          <h6>{productPrice}</h6>
          <p>{productBeforePrice}</p>
        </div>
        <button>Buy now</button>
      </div>
    </div>
  );
}

export default Product;
