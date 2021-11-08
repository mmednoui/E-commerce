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
          <p className="green">About us</p>
          <p className="green">Careers</p>
          <p className="green">Press Releases</p>
          <p className="green">Blog</p>
        </div>
        <div className="contact">
          <h6>Connections</h6>
          <p className="green">Facebook</p>
          <p className="green">Twitter</p>
          <p className="green">Instagram</p>
          <p className="green">Youtube</p>
          <p className="green">LinkedIn</p>
        </div>
        <div className="contact">
          <h6>Earnings</h6>
          <p className="green">Become an Affiliate</p>
          <p className="green">Advertise your product</p>
          <p className="green">Sell on Market</p>
        </div>{" "}
        <div className="contact">
          <h6>Account</h6>
          <p className="green">Your account</p>
          <p className="green">Returns Centre</p>
          <p className="green">100 % purchase protection</p>
          <p className="green">Chat with us</p>
          <p className="green">Help</p>
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
