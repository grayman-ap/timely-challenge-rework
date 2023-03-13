import React from "react";
import { color } from "../utils/data/data";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Button= ({ title, props, children })=>{
  return (
    <Link to="/get-started/lets-begin">
    <button
      type="button"
     
      style={{
        padding: 25,
        width: 160,
        borderRadius: 15,
        outline: 0,
        borderWidth: 0,
        fontWeight: 400,
        backgroundColor: color.white,
      }}
    >
      <div className="button_content">
        <span className="text">{title}</span>
        <FaAngleDoubleRight />
      </div>
    </button>
    </Link>
  );
}

export default Button;
