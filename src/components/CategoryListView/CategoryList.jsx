import React from "react";
import CategorySidebar from "../CategoryGridView/CategorySidebar";
import Filter from "../CategoryGridView/Filter";
import "./CategoryList.css";
import ProductL from "./ProductL";
function CategoryList() {
  return (
    <div className="cat_list">
      <div className="Categories_header">
        <p> Homepage </p>
        <p style={{ margin: "0 10px" }}>/</p>
        <h6>Fruit and vegetables</h6>
      </div>
      <div className="grid_choice">
        <h3>Fruit and vegetables</h3>
        <div className=" grid_choice_right">
          <i class="far fa-border-all green  hold"></i>
          <p className="choice_active hold">Grid view</p>
          <i class="far fa-list-ul  hold"></i>
          <p className="hold">List view</p>
          <div className="num_prod green">117</div>
          <p className="choice_active  hold">Products</p>
        </div>
      </div>
      <Filter />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
          paddingBottom: "0",
        }}
      >
        <CategorySidebar />
        <div className="list_view">
          <ProductL />
          <ProductL />
          <ProductL />
          <ProductL />
          <ProductL />
          <ProductL />
        </div>
      </div>
      <div className="cat_bottom">
        <div>
          <p className="">Page</p>
          <p className=" hold">1</p>
          <p className=" hold">2</p>
          <p className=" choice_activehold">3</p>
          <p className=" hold">4</p>
        </div>
        <button className="hold">
          {" "}
          <select className="hold" name="" id="">
            <option value="">Show more products</option>
          </select>
        </button>
        <div>
          <div className="num_prod green">232</div>
          <p className="choice_active hold">Products</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
