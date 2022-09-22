import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "../Header/Checkout/Success/Success";
import HomePage from "./HomePage";
import LearnMore from "./LearnMore/LearnMore";

const Content = () => {
  return (
    <div>
      <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/product/:urlKey" element={<LearnMore />}/>
				<Route path="/success" element={<Success />}/>
      </Routes>
    </div>
  );
};

export default Content;
