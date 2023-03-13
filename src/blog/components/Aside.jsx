import React from "react";
import { filterData } from "../../utils/data/nav";

function Aside() {
  return (
    <div className="aside">
      <div className="aside__container">
        <div className="aside__header">
          <div className="a__content">
            <span>Filters</span>
            <span>Clear all</span>
          </div>
          <p>Showing 342 of 342</p>
        </div>
      <div className="aside__header">
      <div className="a__content">
        <span>Search</span>
        <span>Clear</span>
        </div>
        <input type="text" placeholder="Keyword" />
      </div>
      <div className="aside__header">
      <div className="a__content">
        <span>Blog Categories</span>
        <span>Clear</span>
        </div>
      <div className="aside__list">
        {filterData.map((item)=>(
          <div className="aside__data" key={item.id}>
              <div>{item.title}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
  );
}

export default Aside;
