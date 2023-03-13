import React from "react";
import { blogCard } from "../data/blog";
import { Link } from "react-router-dom";
import {TfiAngleDoubleRight} from 'react-icons/tfi'
import BlogCard from "./BlogCard";
function Content() {
  return (
    <div className="content__container">
      {blogCard.map((item) => (
        <div className="content__data">
          <img src={item.image} alt="post1" />
          <div className="tag">{item.tag}</div>
          <div className="content__header">
            <div className="c__header">{item.header}</div>
            <div className="c__content">{item.content}</div>
            <Link to={item.url} className="link">
              <div className="c__url">{item.link} <TfiAngleDoubleRight/></div>
            </Link>
          </div>
        </div>
      ))}
      <BlogCard />
    </div>
  );
}

export default Content;
