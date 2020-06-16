import { combineReducers } from "redux";
import initialDataReducer from "./initialData/initialData.reducer";

const rootReducer = combineReducers({
	initialData: initialDataReducer,
});

export default rootReducer;
