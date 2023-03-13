import React, { useEffect, useState } from "react";
import logo from "../utils/assets/logoDark.svg";
import { color, headerData } from "../utils/data/data";
import Button from "./Button";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useGlobalContext } from "../utils/ContextProvider";
import { theme } from "../utils/data/data";
const HeaderDark = () => {
  const {
    handleMouseEnter,
    handleMouseLeave,
    isMouseHover,
  } = useGlobalContext();

  return (
    <div className="section" theme={theme.lightTheme} >
      <div className="section__container">
        <div className="section__logo">
          <Link to="/" className="link">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="link__container">
          {headerData.map((item) => (
            <div className="link__home"  onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}>
              <Link to={item.url} key={item.id} className="link">
                <div
                  className="main__link"
                  style={{color:theme.lightTheme.color}}
                >
                  <div>
                    <span>
                      {item.linkTitle}
                      <span
                        className={
                          isMouseHover === item.id ? item.style : "remove"
                        }
                      >
                        {item.icon}
                      </span>
                    </span>
                  </div>
                  {isMouseHover === item.id ? (
                    <div className="nav__menu">{item.dropDownContent}</div>
                  ) : null}
                </div>
              </Link>
            </div>
          ))}
          <Button title="Get started" bg="purple"/>
        </div>
      </div>
    </div>
  );
};
export default HeaderDark;
