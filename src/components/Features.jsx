import React from "react";
import { useGlobalContext } from "../utils/ContextProvider";
import { featureData } from "../utils/data/nav";
import { Link } from "react-router-dom";
import FeaturesComp from "./FeaturesComp";
import Integration from "./Integration";

function Features() {
  return (
   <div className="dropContainer">
    <div className="feature__app">
    <div className="featureComp">
    <FeaturesComp />
    </div>
    <div className="integrationComp">
    <Integration />
    </div>
    </div>
    </div>

  );
}

export default Features;
