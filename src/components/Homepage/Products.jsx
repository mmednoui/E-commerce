import React from "react";
import Product from "./Product";
import "./Products.css";
function Products() {
  return (
    <div className="products">
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
    </div>
  );
}

export default Products;
