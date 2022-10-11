import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAllData } from "../../redux/actions/EnstoreActions";
import Spinner from "../../Spinner/Spinner";
import Footer from "../Footer/Footer";
import Success from "../Header/Checkout/Success/Success";
import Header from "../Header/Header";
import StoreSignin from "../Login/StoreSignin";
import CartPage from "./CartPage/CartPage";
import HomePage from "./HomePage";
import LearnMore from "./LearnMore/LearnMore";
import ViewAll from "./ViewAll/ViewAll";

const Content = () => {
  const { allData } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const categories = allData?.selected_categories;
  if (categories === undefined) {
    return <Spinner />;
  }
  return (
    <div>
       <Header />
      <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/product/:urlKey" element={<LearnMore />}/>
				<Route path="/success" element={<Success />}/>
				<Route path="/viewall" element={<ViewAll />}/>
				<Route path="/signin" element={<StoreSignin />}/>
        <Route path="/cart" element={<CartPage />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default Content;
