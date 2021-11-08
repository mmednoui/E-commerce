import React from "react";
import Content from "./Content";
import "./Feed.css";
import Menu from "./Menu";
function Feed() {
  return (
    <div className="feed">
      <Menu />
      <Content />
    </div>
  );
}

export default Feed;
