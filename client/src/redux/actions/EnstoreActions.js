 import axios from "axios";
import instance from "../../utils/axiosconfig";
export const SPINNER = "SPINNER";
export const POST_ADMIN_LOGIN = "ADMIN_LOGIN";
export const ALL_DATA = 'ALL_DATA'
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SINGLE_PRODUCTS = "SINGLE_PRODUCTS";
export const POST_Add_TO_CART = "Add_TO_CART";
export const POST_CheckOut_Click = "Checkout_Click";
export const POST_Final_Checkout = "Final_Checkout";
export const POST_ORDER_DATA = "ORDER_DATA";
export const CLEAR_CART_ORDER_DATA = "CLEAR_CART_ORDER_DATA";
export const CLEAR_CART_ITEM = "CLEAR_CART_ITEM";

export const setSpinner = (spinnerset) => async (dispatch) => {
  console.log(spinnerset, "spinnerset");
  dispatch({
    type: SPINNER,
    payload: spinnerset,
  });
};

export const adminLogin = (userName, password) => async (dispatch) => {
  await axios
    .post("http://127.0.0.1/storefront/rest/V1/integration/admin/token", {
      username: userName,
      password: password,
    })
    .then((response) => {
      console.log("response", response);
      localStorage.setItem("AdminData", JSON.stringify(response.data));
      dispatch({
        type: POST_ADMIN_LOGIN,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: POST_ADMIN_LOGIN,
        payload: error.response.data,
      });
    });
};
export const getAllData = () => async (dispatch) => {
  await instance
    .get("/allData")
    .then((res) => {
      dispatch({
        type: ALL_DATA,
        payload: res.data,
      });
      dispatch(setSpinner(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ALL_DATA,
        payload: err.res.data,
      });
    });
};
export const getCategories = () => async (dispatch) => {
  await instance
    .get("/categories")
    .then((res) => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: res.data,
      });
      dispatch(setSpinner(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_CATEGORIES,
        payload: err.res.data,
      });
    });
};
export const getProducts = (id) => async (dispatch) => {
  await instance
    .get(`/products`, {
      params: { id: id },
    })
    .then((res) => {
      let filteredRes = res.data.filter(
        (resData) => resData.status == 1 && resData.visibility == 4
      );
      dispatch({
        type: FETCH_PRODUCTS,
        payload: filteredRes,
      });
      dispatch(setSpinner(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_PRODUCTS,
        payload: err.res.data,
      });
    });
};
export const getSingleProduct = (id) => {
  return async (dispatch) => {
    dispatch(setSpinner(true));
    await instance
      .get(`/productsByURLKey`, {
        params: { id: id },
      })
      .then((res) => {
        dispatch({
          type: SINGLE_PRODUCTS,
          payload: res.data[0],
        });
        setTimeout(() => {
          dispatch(setSpinner(false));
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FETCH_PRODUCTS,
          payload: err.res.data,
        });
      });
  };
};
export const addToCart = (cartData, qty) => async (dispatch) => {
  // let localCartData = localStorage.getItem('cartData') != null ? localStorage.getItem('cartData') : []
  cartData.cartQty = qty;
  // localStorage.setItem('cartData', localCartData.push(cartData))

  dispatch({
    type: POST_Add_TO_CART,
    payload: cartData,
  });
};
export const addCartItemsCheckout = () => async (dispatch) => {
  await instance
    .get("/quoteId")
    .then((response) => {
      console.log("response", response);
      localStorage.setItem("tokenKey", response.data);
      dispatch({
        type: POST_CheckOut_Click,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const addCartFinalCheckOut = (datas) => async (dispatch) => {
  await instance
    .post("/cartItems", datas)
    .then((response) => {
      console.log("response", response);
      localStorage.setItem("cartData", JSON.stringify(response.data));
      dispatch({
        type: POST_Final_Checkout,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const orderData = (orderData) => async (dispatch) => {
  dispatch({
    type: POST_ORDER_DATA,
    payload: orderData,
  });
};
export const clearCartAndOrderData = () => async (dispatch) => {
  dispatch({
    type: CLEAR_CART_ORDER_DATA,
    payload: [],
  });
};
export const clearCartItem = (id) => async (dispatch) => {
  dispatch({
    type: CLEAR_CART_ITEM,
    payload: id,
  });
};
