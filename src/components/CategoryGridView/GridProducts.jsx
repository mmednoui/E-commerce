import React from "react";
import Product from "../Homepage/Product";
import "./GridProducts.css";
function GridProducts() {
  return (
    <div className="gridProducts">
      <Product
        productImg="assets/product.png"
        productTitle="Product Title"
        productDesc="Space for a small product description "
        productPrice="1.12 USD"
        productBeforePrice=""
        rating="true"
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
        rating="true"
      />
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
        rating="true"
      />{" "}
      <Product
        productImg="assets/product.png"
        productTitle="Product Title"
        productDesc="Space for a small product description "
        productPrice="1.12 USD"
        productBeforePrice="48.56"
        percentage="36"
        rating="true"
      />
      <Product
        productImg="assets/product.png"
        productTitle="Product Title"
        productDesc="Space for a small product description "
        productPrice="1.12 USD"
        productBeforePrice=""
        rating="true"
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
        rating="true"
        percentage="36"
      />
    </div>
  );
}

export default GridProducts;
