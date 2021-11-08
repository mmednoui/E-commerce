import React from "react";
import About from "./About";
import Blog from "./Blog";
import Feed from "./Feed";
import ListProducts from "./ListProducts";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import Search from "./Search";
import Slider from "./Slider";

function Homepage() {
  return (
    <div>
      <Feed />
      <Slider />
      <ListProducts />
      <Blog />
    </div>
  );
}

export default Homepage;
