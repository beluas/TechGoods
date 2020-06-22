import { combineReducers } from "redux";
import initialDataReducer from "./initialData/initialData.reducer";
import cartReducer from "./cart/cart.reducer";
import searchReducer from "./search/search.reducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart", "initialData"],
};

const rootReducer = combineReducers({
	initialData: initialDataReducer,
	cart: cartReducer,
	search: searchReducer,
});

export default persistReducer(persistConfig, rootReducer);
