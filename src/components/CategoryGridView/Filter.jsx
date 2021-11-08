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
    </div>
  );
}

export default Filter;
