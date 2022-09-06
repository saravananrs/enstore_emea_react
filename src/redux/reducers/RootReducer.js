import { combineReducers } from 'redux'
import EnstoreReducer from './EnstoreReducer'

const RootReducer = combineReducers({
    store : EnstoreReducer,
})

export default RootReducer
