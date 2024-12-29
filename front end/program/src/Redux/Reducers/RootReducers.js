import { combineReducers } from "redux"
import CategoryReducer from "./CategoryReducer"
import ProductReducer from "./ProductsReducer"
import AuthReducer from "./AuthReducer"
import CartReducer from "./CartReducer"
import LignOrderReducer from "./LigneOrderReducer"
import NewOrderReducer from "./OrderReducer"




const RootReducers = combineReducers({
    Categories : CategoryReducer,
    ProductsRed : ProductReducer ,
    AuthRed : AuthReducer,
    CartRed : CartReducer,
    OrderRed : NewOrderReducer,
    LignOrderRed : LignOrderReducer
})



export default RootReducers