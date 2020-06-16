import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const generateStore = () => {
	const middlewares = [logger];
	const store = createStore(rootReducer, applyMiddleware(...middlewares));

	return store;
};

export default generateStore;
