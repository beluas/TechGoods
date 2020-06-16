import { combineReducers } from "redux";
import initialDataReducer from "./initialData/initialData.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
	initialData: initialDataReducer,
	cart: cartReducer,
});

export default rootReducer;
