import axios from "axios";
import instance from "../../utils/axiosconfig";
export const SPINNER = "SPINNER";
export const POST_STORE_LOGIN = "STORE_LOGIN";
export const POST_ADMIN_LOGIN = "ADMIN_LOGIN";
export const ALL_DATA = "ALL_DATA";
export const ALL_LOCAL_DATA = "ALL_LOCAL_DATA";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SINGLE_PRODUCTS = "SINGLE_PRODUCTS";
export const POST_Add_TO_CART = "Add_TO_CART";
export const POST_CheckOut_Click = "Checkout_Click";
export const POST_Final_Checkout = "Final_Checkout";
export const UPADTE_CART_ITEMS = "UPADTE_CART_ITEMS";
export const REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS";
export const DISCOUNT_INFO = "DISCOUNT_INFO";
export const SHIIPING_ADDRESS = "SHIIPING_ADDRESS";
export const POST_ORDER_DATA = "ORDER_DATA";
export const CLEAR_CART_ORDER_DATA = "CLEAR_CART_ORDER_DATA";
export const CLEAR_CART_ITEM = "CLEAR_CART_ITEM";
export const CREATE_ORDER = "CREATE_ORDER"

export const setSpinner = (spinnerset) => async (dispatch) => {
  dispatch({
    type: SPINNER,
    payload: spinnerset,
  });
};

export const storeLogin = (data) => async (dispatch) => {
  await instance
    .post("/account/login", data)
    .then((response) => {
      localStorage.setItem("storeSignIn", JSON.stringify(response.data));
      dispatch({
        type: POST_STORE_LOGIN,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getSavedAddress = (email) => async (dispatch) => {
  await instance
    .post("/checkout/savedAddress", email)
    .then((res) => {
      localStorage.setItem("savedAddress", JSON.stringify(res.data));
      dispatch({
        type: SHIIPING_ADDRESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SHIIPING_ADDRESS,
        payload: err.res.data,
      });
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
    .get("/catalog/allData")
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
export const getAllLocalData = () => async (dispatch) => {
  await instance
    .get("/catalog/allLocalData")
    .then((res) => {
      localStorage.setItem("localResponse",res.status)
      dispatch({
        type: ALL_LOCAL_DATA,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: ALL_LOCAL_DATA,
        payload: err.res.data,
      });
    });
};
export const getCategories = () => async (dispatch) => {
  await instance
    .get("/catalog/categories")
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
    .get(`/catalog/products`, {
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
      .get(`/catalog/productsByURLKey`, {
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
export const addToCart = (cartData, qty , key) => async (dispatch) => {
  // let localCartData = localStorage.getItem('cartData') != null ? localStorage.getItem('cartData') : []
  cartData.cartQty = qty;
  cartData.key = key
  dispatch({
    type: POST_Add_TO_CART,
    payload: cartData,
  });
};
export const addCartItemsCheckout = () => async (dispatch) => {
  await instance
    .get("/checkout/quoteId")
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
    .post("/checkout/cartItems", datas)
    .then((response) => {
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
export const updateCartItems = (datas) => async (dispatch) => {
  await instance
    .post("/catalog/updateCartItems", datas)
    .then((response) => {
      dispatch({
        type: UPADTE_CART_ITEMS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const removeCartItems = (datas) => async (dispatch) => {
  await instance
    .post("/catalog/removeCartItems", datas)
    .then((response) => {
      dispatch({
        type: REMOVE_CART_ITEMS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const createOrder = (datas) => async (dispatch) => {
  await instance
    .post("/checkout/createOrder", datas)
    .then((response) => {
      console.log("response", response.data);
      console.log("order Id", response.data.increment_id);
      localStorage.removeItem("cartData");
      localStorage.removeItem("cartProducts");
      dispatch({
        type: CREATE_ORDER,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getDiscountInfo = (info) => async (dispatch) => {
  await instance
    .post("/checkout/discount",info)
    .then((res) => {
      dispatch({
        type: DISCOUNT_INFO,
        payload: res.data,
      })
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: DISCOUNT_INFO,
        payload: err.res.data,
      });
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
export const clearCartItem = (item) => async (dispatch) => {
  dispatch({
    type: CLEAR_CART_ITEM,
    payload: item,
  });
};
