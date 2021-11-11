import React from "react";
import ListProducts from "../Homepage/ListProducts";
import "./Detail.css";
function Detail() {
  return (
    <div className="details">
      <div className="Categories_header">
        <p> Homepage </p>
        <p style={{ margin: "0 10px" }}>/</p>
        <p>Fruit and vegetables</p>
        <p style={{ margin: "0 10px" }}>/</p>
        <h6>Carrots from Tomissy Farm</h6>
      </div>
      <div className="detail_content">
        <div className="detail_content_left">
          <img src="assets/product.png" alt="" />
          <img src="assets/product.png" alt="" />
          <img src="assets/product.png" alt="" />
        </div>
        <div className="detail_content_right">
          <div className="detail_desc">
            <div className="detail_desc_title">
              <h3>Carrots from Tomissy Farm</h3>
              <div className="detailstars">
                <div class="detailrating detailrating2">
                  <a href="#5" title="Give 5 stars">
                    ★
                  </a>
                  <a href="#4" title="Give 4 stars">
                    ★
                  </a>
                  <a href="#3" title="Give 3 stars">
                    ★
                  </a>
                  <a href="#2" title="Give 2 stars">
                    ★
                  </a>
                  <a href="#1" title="Give 1 star">
                    ★
                  </a>
                </div>
                <p>(1 customer review)</p>
              </div>
            </div>
            <h6>
              Carrots from Tomissy Farm are one of the best on the market.
              Tomisso and his family are giving a full love to his Bio products.
              Tomisso’s carrots are growing on the fields naturally.
            </h6>
            <div className="detail_desc_desc">
              <div className=" detail_desc_desc_items">
                <div>
                  <p>SKU:</p>
                  <p className="black">76645</p>
                </div>
                <div>
                  <p>Category::</p>
                  <p className="black underlined">Vegetables</p>
                </div>{" "}
                <div>
                  <p>Stock:</p>
                  <p className="green underlined">In Stock</p>
                </div>{" "}
                <div>
                  <p>Farm</p>
                  <p className="black">Grocery Tarm Fields</p>
                </div>
              </div>
              <div className=" detail_desc_desc_items">
                <div>
                  <p>Freshness:</p>
                  <p className="black">1 days old</p>
                </div>{" "}
                <div>
                  <p>Buy by:</p>
                  <p className="black">pcs, kgs, box, pack</p>
                </div>{" "}
                <div>
                  <p>Delivery::</p>
                  <p className="black">in 2 days</p>
                </div>
                <div>
                  <p>Delivery area</p>
                  <p className="black">Czech republic</p>
                </div>
              </div>
            </div>
            <div className="detail_desc_price">
              <div className="detail_price">
                <h6 className="green">36.23 USD</h6>
                <p>48.56 USD</p>
              </div>
              <div className="detail_desc_price_PCs">
                <p>1</p>
                <p>|</p>
                <select name="pcs" id="">
                  <option value="">Pcs</option>
                </select>
              </div>
              <button>
                <p>+</p> Add to cart
              </button>
            </div>
            <div className="detail_desc_wishlist">
              <button>Add to my wish list</button>
              <button>Compare</button>
            </div>
          </div>
          <div className="detail_review">
            <div className="detail_review_buttons">
              <button className="border_active">Description</button>
              <button>
                Reviews <div>18</div>
              </button>
              <button>
                Questions<div>4</div>
              </button>
            </div>
            <div className="detail_review_desc">
              <div>
                <h6>Origins</h6>
                <p>
                  We work hard to ensure that the fruit and vegetables we sell
                  are fresh and high in quality. If we don’t grow them
                  ourselves, we source them from carefully chosen suppliers,
                  preferring to buy locally whenever possible.
                </p>
              </div>{" "}
              <div>
                <h6>How to cook</h6>
                <p>
                  From roasts, salads and soups to casseroles and cakes, Carrots
                  will lend sweetness, texture and colour to an enormous number
                  of recipes.
                </p>
              </div>
            </div>
          </div>
          <div className="detail_vitamine"></div>
        </div>
      </div>
      <ListProducts />
    </div>
  );
}

export default Detail;
