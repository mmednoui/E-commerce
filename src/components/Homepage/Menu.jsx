import React from "react";
import "./Menu.css";
import MenuCard from "./MenuCard";
function Menu() {
  return (
    <div className="menu">
      <MenuCard
        title="Category menu"
        products={[
          "Bakery",
          "Fruit and vegetables",
          "Meat and fish",
          "Drinks",
          "Kitchen",
        ]}
        more="More categories"
      />
      <MenuCard
        title="Best selling products"
        products={[
          "Kitchen",
          "Meat and fish",
          "Special nutrition",
          "Pharmacy",
          "Baby",
        ]}
        more="More categories"
      />
      <MenuCard
        title="Category menu"
        products={[
          "Bakery",
          "Fruit and vegetables",
          "Meat and fish",
          "Drinks",
          "Kitchen",
        ]}
        more="More categories"
        className="menu_margin"
      />
    </div>
  );
}

export default Menu;
