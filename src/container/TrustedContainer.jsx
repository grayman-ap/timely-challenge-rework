import React from "react";
import Trusted from "../components/Trusted";
import ScrollCard from "../components/ScrollCard";

function TrustedContainer() {
  return (
    <div className="TrustedContainer">
      <div className="trustContainer">
        <Trusted />
      </div>
      <div className="scrollContainer">
        <ScrollCard />
      </div>
    </div>
  );
}

export default TrustedContainer;
