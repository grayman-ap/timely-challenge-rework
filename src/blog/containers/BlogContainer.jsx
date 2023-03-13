import React from "react";
import Blog from "../components/Blog";
import Aside from "../components/Aside";
import Content from "../components/Content";
import Try from "../../components/Try";
import Footer from "../../components/Footer";

function BlogContainer() {
  return (
    <div className="blogContainer">
      <Blog />
      <aside>
        <div className="asideContainer">
          <Aside />
        </div>
        <div className="contentContainer">
          <Content />
        </div>
      </aside>
      <Try />
      <Footer />
    </div>
  );
}

export default BlogContainer;
