import React from "react";
import "./Filter.css";
function Filter() {
  return (
    <div>
      <div className="filter">
        <fieldset>
          <label>
            <input type="radio" name="radio-button" value="css" checked />
            <span>Filter text</span>
          </label>
          <label>
            <input type="radio" name="radio-button" value="no" />
            <span>Filter text</span>
          </label>
        </fieldset>
        <div class="control_group">
          <label class="control control-checkbox">
            Filtre
            <input type="checkbox" />
            <div class="control_indicator"></div>
          </label>
          <div className="nbm">nbm</div>
        </div>
        <div class="control_group">
          <label class="control control-checkbox">
            Filtre
            <input type="checkbox" />
            <div class="control_indicator"></div>
          </label>
          <div className="nbm">nbm</div>
        </div>
        <div class="control_group">
          <label class="control control-checkbox">
            Filtre
            <input type="checkbox" />
            <div class="control_indicator"></div>
          </label>
          <div className="nbm">12</div>
          <div class="search_shape" style={{ margin: "0 20px" }}></div>
          <select name="All categories" id="">
            <option>Select</option>
          </select>
        </div>
      </div>
      <div className="applied_filters">
        <p> Applied filters :</p>
        <div
          className="percent green"
          style={{ position: "relative", width: "7%", margin: "-25px 10px" }}
        >
          Selected filter{" "}
          <span style={{ opacity: ".5", margin: "0 5px" }}>x</span>
        </div>{" "}
        <div
          className="percent green"
          style={{ position: "relative", width: "7%", margin: "-25px 10px" }}
        >
          Selected filter{" "}
          <span style={{ opacity: ".5", margin: "0 5px" }}>x</span>
        </div>
      </div>
      <div className="gridContent"></div>
    </div>
  );
}

export default Filter;
