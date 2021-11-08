import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="search">
      <img src="assets/logo.png" alt="" />
      <div className="search_bar">
        <select name="All categories" id="">
          <option>All categories</option>
        </select>
        <div className="search_shape"></div>
        <input type="text" placeholder="Search Products, categories ..." />
        <i class="fa fa-search"></i>
      </div>
      <div className="search_icons">
        <i class="fa fa-user"></i>
        <i class="fa fa-shopping-basket"></i>
      </div>
    </div>
  );
}

export default Search;
