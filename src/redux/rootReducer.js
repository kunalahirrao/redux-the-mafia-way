import { combineReducers } from 'redux'
import mafiaReducer from "./bear-shop/mafiaReducer"

const rootReducer = combineReducers({
    bearShop: mafiaReducer
})

export default rootReducer