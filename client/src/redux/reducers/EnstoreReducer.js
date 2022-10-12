import {
  POST_ADMIN_LOGIN,
  POST_Add_TO_CART,
  POST_CheckOut_Click,
  POST_Final_Checkout,
  POST_ORDER_DATA,
  CLEAR_CART_ORDER_DATA,
  CLEAR_CART_ITEM,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  SPINNER,
  SINGLE_PRODUCTS,
  ALL_DATA,
  POST_STORE_LOGIN,
  SHIIPING_ADDRESS
} from "../actions/EnstoreActions";
const initialState = {
  isLoading:true,
  loginData: localStorage.getItem("AdminData"),
  storeLoginData:[],
  cartData:  [], // JSON.parse(localStorage.getItem('cartProducts')) != null ? [JSON.parse(localStorage.getItem('cartProducts'))]  : [],
  quoteId: localStorage.getItem("tokenKey"),
  checkout: [],
  allData:[],
  categoryData: [],
  productData: [],
  savedAddress:[],
  singleProduct:null,
  orderData: {
    delivery: 0,
    tax: 0,
  },
};
const EnstoreReducer = function (state = initialState, action) {
  switch (action.type) {
    case SPINNER:{
      return{
        ...state,
        isLoading:action.payload
      }
    }
    case POST_STORE_LOGIN: {
      return {
        ...state,
        storeLoginData: action.payload,
      };
    }
    case POST_ADMIN_LOGIN: {
      return {
        ...state,
        loginData: [],
      };
    }
    case ALL_DATA:{
      return{
        ...state,
        allData:action.payload
      }
    }
    case FETCH_CATEGORIES: {
      return {
        ...state,
        categoryData: action.payload,
      };
    }
    case FETCH_PRODUCTS: {
      return {
        ...state,
        productData: action.payload,
      };
    }
    case SINGLE_PRODUCTS: {
      return {
        ...state,
        singleProduct: action.payload,
      };
    }
    case POST_Add_TO_CART: {
      const prodIndex = state.cartData.findIndex(
        (cart) => cart.id === action.payload.id
      );
      return {
        ...state,
        cartData:
          prodIndex > -1
            ? state.cartData.map((item) =>
                item.id === action.payload.id
                  ? { ...item, cartQty: action.payload.cartQty + 1 }
                  : item
              )
            : [...state.cartData, action.payload],
      };
    }
    case POST_CheckOut_Click: {
      return {
        ...state,
        quoteId: [],
      };
    }
    case POST_CheckOut_Click: {
      return {
        ...state,
        savedAddress: [...state.savedAddress, action.payload],
      };
    }
    case POST_Final_Checkout: {
      return {
        ...state,
        checkout: [...state.checkout, action.payload],
      };
    }
    case POST_ORDER_DATA: {
      return {
        ...state,
        orderData: action.payload,
      };
    }
    case CLEAR_CART_ORDER_DATA: {
      return {
        ...state,
        cartData: action.payload,
        orderData: {
          delivery: 0,
          tax: 0,
        },
      };
    }
    case CLEAR_CART_ITEM: {
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default EnstoreReducer;
