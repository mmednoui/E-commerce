import React from "react";
import "./ListProducts.css";
import Product from "./Product";
function ListProducts() {
  return (
    <div className="listProducts">
      <div className="list_header">
        <p>Section Headline</p>
        <button>
          Button
          <i
            class="fa fa-angle-right green"
            style={{
              fontSize: "14px",
              fontWeight: "bolder",
              paddingLeft: "10px",
            }}
          ></i>
        </button>
      </div>
      <div className="productList">
        <Product
          productImg="assets/product.png"
          productTitle="Product Title"
          productDesc="Space for a small product description "
          productPrice="1.12 USD"
          productBeforePrice=""
        />
        <Product
          productImg="assets/product.png"
          productTitle="Product Title"
          productDesc="Space for a small product description "
          productPrice="1.12 USD"
          productBeforePrice="48.56"
          percentage="36"
        />{" "}
        <Product
          productImg="assets/product.png"
          productTitle="Product Title"
          productDesc="Space for a small product description "
          productPrice="1.12 USD"
          productBeforePrice="48.56"
          percentage="36"
        />
        <Product
          productImg="assets/product.png"
          productTitle="Product Title"
          productDesc="Space for a small product description "
          productPrice="1.12 USD"
          productBeforePrice=""
        />
      </div>
    </div>
  );
}

export default ListProducts;
