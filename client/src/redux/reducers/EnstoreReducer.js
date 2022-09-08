import {
    POST_ADMIN_LOGIN,
} from '../actions/EnstoreActions'
const initialState = {
    isAdminAuthenticate: localStorage.getItem('AdminData') != null ? true : false,
    loginData: localStorage.getItem('AdminData')
}
const EnstoreReducer = function (state = initialState, action) {
    switch (action.type) {
        case POST_ADMIN_LOGIN: {
            return {
                ...state,
                isAdminAuthenticate: action?.payload ? true : false,
                loginData: action?.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default EnstoreReducer
