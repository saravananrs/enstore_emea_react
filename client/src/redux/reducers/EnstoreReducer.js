import {
    POST_ADMIN_LOGIN,
} from '../actions/EnstoreActions'
const initialState = {
    loginData: localStorage.getItem('AdminData')
}
const EnstoreReducer = function (state = initialState, action) {
    switch (action.type) {
        case POST_ADMIN_LOGIN: {
            return {
                ...state,
                loginData: [],
            }
        }
        default: {
            return state
        }
    }
}

export default EnstoreReducer
