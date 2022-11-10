import React, { useEffect } from "react";

// Components
import Footer from "../Footer/Footer";
import Success from "../Header/Checkout/Success/Success";
import Header from "../Header/Header";
import StoreSignin from "../Login/StoreSignin";
import CartPage from "./CartPage/CartPage";
import HomePage from "./HomePage";
import LearnMore from "./LearnMore/LearnMore";
import ViewAll from "./ViewAll/ViewAll";

// MUI
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  getAllData,
  getAllLocalData,
} from "../../redux/actions/EnstoreActions";

const useStyles = makeStyles(() => ({
  spinnerBox: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9fa",
  },
  spinner: {
    color: "#f37321 !important",
  },
}));
const Content = () => {
  const classes = useStyles();
  const { allData, allLocalData } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const response = localStorage.getItem("localResponse");
  const localRes = JSON.parse(response);
  useEffect(() => {
    if (localRes !== 200) {
      dispatch(getAllData());
    }
    dispatch(getAllLocalData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categories =
    allLocalData === undefined
      ? allData?.selected_categories
      : allLocalData?.selected_categories;
  if (categories === undefined) {
    return (
      <Box className={classes.spinnerBox}>
        {" "}
        <CircularProgress className={classes.spinner} />
      </Box>
    );
  }
  return (
    <div className="app_content">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:urlKey" element={<LearnMore />} />
        <Route path="/success" element={<Success />} />
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/signin" element={<StoreSignin />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Content;
