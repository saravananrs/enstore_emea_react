import {
    POST_ADMIN_LOGIN,
    POST_Add_TO_CART
} from '../actions/EnstoreActions'
const initialState = {
    loginData: localStorage.getItem('AdminData'),
    cartData: [] //localStorage.getItem('cartData') != null ? localStorage.getItem('cartData') : []
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
        default: {
            return state
        }
    }
}

export default EnstoreReducer
