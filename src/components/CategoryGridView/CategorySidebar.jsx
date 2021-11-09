import React from "react";
import "./CategorySidebar.css";
function CategorySidebar() {
  return (
    <div className="catSidebar">
      <div className="sideCatElement">
        <h6>Categories</h6>
        <div className="sidecat_category">
          <p>Category name</p>
          <div>320</div>
        </div>{" "}
        <div className="sidecat_category">
          <p>Category name</p>
          <div>112</div>
        </div>{" "}
        <div className="sidecat_category">
          <p>Category name</p>
          <div>42</div>
        </div>{" "}
        <div className="sidecat_category">
          <p>Category name</p>
          <div>38</div>
        </div>
      </div>
      <div className="sideCatElement">
        <h6>Brands</h6>
        <label class="control control-checkbox" style={{ margin: "10px 0" }}>
          Filtre by brand item
          <input type="checkbox" />
          <div class="control_indicator"></div>
        </label>
        <label class="control control-checkbox" style={{ margin: "10px 0" }}>
          Filtre by brand item
          <input type="checkbox" />
          <div class="control_indicator"></div>
        </label>
        <label class="control control-checkbox" style={{ margin: "10px 0" }}>
          Filtre by brand item
          <input type="checkbox" />
          <div class="control_indicator"></div>
        </label>
        <label class="control control-checkbox" style={{ margin: "10px 0" }}>
          Filtre by brand item
          <input type="checkbox" />
          <div class="control_indicator"></div>
        </label>
      </div>
      <div className="sideCatElement">
        <h6>Rating</h6>
        <div className="stars">
          <label class="control control-checkbox" style={{ margin: "10px 0" }}>
            <input type="checkbox" />
            <div class="control_indicator"></div>
          </label>
          <div class="rating rating2">
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
        </div>
        <div className="stars">
          <label class="control control-checkbox" style={{ margin: "10px 0" }}>
            <input type="checkbox" />
            <div class="control_indicator"></div>
          </label>
          <div class="rating rating2">
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
        </div>
        <div className="stars">
          <label class="control control-checkbox" style={{ margin: "10px 0" }}>
            <input type="checkbox" />
            <div class="control_indicator"></div>
          </label>
          <div class="rating rating2">
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
        </div>
        <div className="stars">
          <label class="control control-checkbox" style={{ margin: "10px 0" }}>
            <input type="checkbox" />
            <div class="control_indicator"></div>
          </label>
          <div class="rating rating2">
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
        </div>
        <div className="stars">
          <label class="control control-checkbox" style={{ margin: "10px 0" }}>
            <input type="checkbox" />
            <div class="control_indicator"></div>
          </label>
          <div class="rating rating2">
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
        </div>
      </div>
      <div className="sideCatElement">
        <h6>Price</h6>
      </div>
    </div>
  );
}

export default CategorySidebar;
