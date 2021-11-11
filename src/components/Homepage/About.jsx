import React from "react";
import "./About.css";
function About() {
  const listOfTags = [
    "Beans",
    "Carrots",
    "Apples",
    "Garlic",
    "Mushrooms",
    "Tomatoes",
    "Chilli peppers",
    "Broccoli",
    "Watermelons",
    "Oranges",
    "Bananas",
    "Grapes",
    "Cherries",
    "Meat",
    "Seo tag",
    "Fish",
    "Seo tag",
    "Fresh food",
    "Lemons",
  ];
  return (
    <div className="about">
      <div className="contact_container">
        <div className="contact">
          <h6>Get in touch</h6>
          <p className="green hold">About us</p>
          <p className="green hold">Careers</p>
          <p className="green hold">Press Releases</p>
          <p className="green hold">Blog</p>
        </div>
        <div className="contact">
          <h6>Connections</h6>
          <p className="green hold">Facebook</p>
          <p className="green hold">Twitter</p>
          <p className="green hold">Instagram</p>
          <p className="green hold">Youtube</p>
          <p className="green hold">LinkedIn</p>
        </div>
        <div className="contact">
          <h6>Earnings</h6>
          <p className="green hold">Become an Affiliate</p>
          <p className="green hold">Advertise your product</p>
          <p className="green hold">Sell on Market</p>
        </div>{" "}
        <div className="contact">
          <h6>Account</h6>
          <p className="green hold">Your account</p>
          <p className="green hold">100 % purchase protection</p>
          <p className="green hold">Chat with us</p>
          <p className="green hold">Help</p>
        </div>
      </div>
      <div className="tags">
        <h6>Product tags</h6>
        <div className="tags_list">
          {listOfTags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
      </div>
      <p className="copyright">Copyright © 2020 petrbilek.com</p>
    </div>
  );
}

export default About;
