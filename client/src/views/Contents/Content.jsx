import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "../Header/Checkout/Success/Success";
import StoreSignin from "../Login/StoreSignin";
import CartPage from "./CartPage/CartPage";
import HomePage from "./HomePage";
import LearnMore from "./LearnMore/LearnMore";
import ViewAll from "./ViewAll/ViewAll";

const Content = () => {
  return (
    <div>
      <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/product/:urlKey" element={<LearnMore />}/>
				<Route path="/success" element={<Success />}/>
				<Route path="/viewall" element={<ViewAll />}/>
				<Route path="/signin" element={<StoreSignin />}/>
        <Route path="/cart" element={<CartPage />}/>
      </Routes>
    </div>
  );
};

export default Content;
