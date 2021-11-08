import React from "react";
import "./Blog.css";
import BlogBig from "./BlogBig";
import BlogMedium from "./BlogMedium";
import BlogSmall from "./BlogSmall";
function Blog() {
  return (
    <div className="blog">
      <div className="blog_header">
        <p>Read our Blog posts</p>
        <button>
          Go to blog
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
      <div className="blog_content">
        <BlogBig />
        <BlogMedium />
        <div className="smalls">
          <BlogSmall />
          <BlogSmall />
          <BlogSmall />
        </div>
      </div>
    </div>
  );
}

export default Blog;
