import React from "react";
import "./Product.css";
function Product({
  productImg,
  productTitle,
  productDesc,
  productPrice,
  productBeforePrice,
  percentage,
  rating,
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
      {rating ? (
        <div className="Pstars">
          <div class="Prating Prating2">
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
      ) : (
        ""
      )}
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
