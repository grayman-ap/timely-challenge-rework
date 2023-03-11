import React from "react";
import { color } from "../utils/data/data";
import { FaAngleDoubleRight } from "react-icons/fa";
const Button= ({ title, props, children })=>{
  return (
    <button
      type="button"
      onClick={() => alert("Button")}
      style={{
        padding: 10,
        width: 160,
        borderRadius: 15,
        outline: 0,
        borderWidth: 0,
        fontWeight: "bold",
        backgroundColor: color.white,
      }}
    >
      <div className="button_content">
        <span className="text">{title}</span>
        <FaAngleDoubleRight />
      </div>
    </button>
  );
}

export default Button;
