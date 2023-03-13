import React from "react";
import BlogContainer from "../containers/BlogContainer";
import HeaderDark from "../../components/HeaderDark";
import '../blog.css'
import ContentContainer from "../containers/ContentContainer";
const BlogApp = () => {
  return (
    <div className="blogApp">
      <HeaderDark />
      <BlogContainer />
      <ContentContainer />
    </div>
  );
};
export default BlogApp;
