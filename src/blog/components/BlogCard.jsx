import React from 'react'
import { smaallBlogCard } from '../data/blog'
import { Link } from 'react-router-dom'
import { TfiAngleDoubleRight } from 'react-icons/tfi'

function BlogCard() {
  return (
    <div className="blogCard__container">
       {smaallBlogCard.map((item) => (
        <div className="card__data">
          <img src={item.image} alt="post1" />
          <div className="tag2">{item.tag}</div>
          <div className="card__header">
            <div className="ca__header">{item.header}</div>
            <div className="c__content">{item.content}</div>
            <Link to={item.url} className="link">
              <div className="ca__url">{item.link} <TfiAngleDoubleRight/></div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogCard