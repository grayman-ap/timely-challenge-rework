import React from "react";

import { Link } from "react-router-dom";
const LoginButton = ({ title, img, url, small }) => {
  return (
    <Link to={url} className="link">
        <div className="button__container">
        <div className="button_content2">
            <span className="b_img">{img}</span>
            <span className="b_title"> {title}</span>
            <span>{small}</span>
            </div>
        </div>
    </Link>
  );
};

export default LoginButton;
