import {
    POST_ADMIN_LOGIN,
    POST_Add_TO_CART,
    POST_CheckOut_Click,
    POST_Final_Checkout,
    POST_ORDER_DATA,
    CLEAR_CART_ORDER_DATA
} from '../actions/EnstoreActions'
const initialState = {
    loginData: localStorage.getItem('AdminData'),
    cartData: [] ,//localStorage.getItem('cartData') != null ? localStorage.getItem('cartData') : []
    quoteId: localStorage.getItem('tokenKey'),
    checkout:[],
    orderData: {
        "delivery":0,
        "tax": 0,
      }
}
const EnstoreReducer = function (state = initialState, action) {
    switch (action.type) {
        case POST_ADMIN_LOGIN: {
            return {
                ...state,
                loginData: [],
            }
        }
        case POST_Add_TO_CART: {
            return {
                ...state,
                cartData: [...state.cartData, action.payload],
            }
        }
        case POST_CheckOut_Click: {
            return {
                ...state,
                quoteId: [],
            }
        }
        case POST_Final_Checkout: {
            return {
                ...state,
                checkout: [...state.checkout, action.payload],
            }
        }
        case POST_ORDER_DATA: {
            return {
                ...state,
                orderData: action.payload,
            }
        }
        case CLEAR_CART_ORDER_DATA: {
            return {
                ...state,
                cartData: action.payload,
                orderData: {
                    "delivery":0,
                    "tax": 0,
                  }
            }
        }
        default: {
            return state
        }
    }
}

export default EnstoreReducer
