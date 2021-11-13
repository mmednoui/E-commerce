import React from "react";
import BlogBig from "./../Homepage/BlogBig";
import "./BlogPage.css";
import BlogMedium from "./../Homepage/BlogMedium";
function BlogPage() {
  return (
    <div className="blogPage">
      {" "}
      <div className="Categories_header">
        <p> Homepage </p>
        <p style={{ margin: "0 10px" }}>/</p>
        <p>Fruit and vegetables</p>
        <p style={{ margin: "0 10px" }}>/</p>
        <h6>Carrots from Tomissy Farm</h6>
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
      <div className="blogPage_blogs">
        {" "}
        <BlogBig /> <BlogBig />
      </div>
      <div className="blogPage_content">
        <div className="blogPage_content_sidebar">
          <div>
            <h6>Archives</h6>
            <p className="green hold">March 2020</p>
            <p className="green hold">February 2020</p>
            <p className="green hold">January 2020</p>
            <p className="green hold">November 2019</p>
            <p className="green hold">December 2019</p>
          </div>
          <div>
            <h6>Category</h6>
            <p className=" hold">Food</p>
            <p className=" hold">Chefs specialities</p>
            <p className=" hold">Vegetable</p>
            <p className=" hold">Meat</p>
            <p className=" hold">Recommendations</p>
          </div>
          <div>
            <h6>Join our list</h6>
            <span>
              Signup to be the first to hear about exclusive deals, special
              offers, recepies from our masters and others.
            </span>
            <div className="blogs_subscribe">
              <input type="text" placeholder="Your email address" />
              <button>Subsribe</button>
            </div>
          </div>
        </div>
        <div className="blogPage_content_list">
          <BlogMedium />
          <BlogMedium />
          <BlogMedium />
          <BlogMedium />
          <BlogMedium />
          <BlogMedium />
          <BlogMedium />
          <BlogMedium />
          <BlogMedium />
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
        <button className="hold"> Next page</button>
        <div>
          <div className="num_prod green">232</div>
          <p className="choice_active hold">Articles</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
