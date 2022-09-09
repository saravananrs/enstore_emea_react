import React from "react";
import Accessories from "./Accessories";
import CablesAndConnectors from "./CablesAndConnecters";
import Communications from "./Communication";
import EvCharger from "./EvCharger";
import HeroSection from "./HeroSection ";
import Lifestyle from "./Lifestyle";
import Microinverter from "./Microinverter";
import Storage from "./Storage";

const Content = () => {
  return (
    <div>
      <HeroSection />
      <Storage />
      {/* <Microinverter />
      <EvCharger />
      <Communications />
      <Accessories />
      <CablesAndConnectors /> */}
      <Lifestyle />
    </div>
  );
};

export default Content;
