import { ADD_ITEM } from "./cart.types";

export const addItem = (payload) => ({
	type: ADD_ITEM,
	payload,
});
