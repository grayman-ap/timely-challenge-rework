import React from "react";
import { blogData, integrationData } from "../utils/data/nav";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function BlogIntegration() {
  return (
    <div className="integration">
      <div className="integration__container">
        <div className="i__header">Latest from our blog</div>
        {blogData.map((item) => (
          <Link to={item.url} key={item.id} className="link">
            <div className="blog__data">
              <img src={item.img} alt="integration" />
              <span>{item.content}</span>
            </div>
          </Link>
        ))}
        <Link to="blog" className="link">
          <div className="blog__all">
              <div className="b__content">
                <p>Read all</p><span className="b_icon">
                <FaAngleDoubleRight />
              </span>
              </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogIntegration;
