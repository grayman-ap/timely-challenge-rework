import React from "react";
import logo from "../utils/assets/logo.svg";
import { color, headerData } from "../utils/data/data";
import Button from "./Button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="section" > 
      <div className="section__container">
        <div className="section__logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="link__container">
          {headerData.map((item) => (
            <Link to={item.url}>
            <div className="main__link">
              <div>{item.linkTitle}</div>
            </div>
            </Link>
          ))}
          <Button title="Get started" />
        </div>
      </div>
    </div>
  );
};
export default Header;
