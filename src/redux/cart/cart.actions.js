import { ADD_ITEM, SHOW_CART, REMOVE_ITEM, CLEAR_ITEM } from "./cart.types";

export const addItem = (payload) => ({
	type: ADD_ITEM,
	payload,
});

export const showCart = () => ({
	type: SHOW_CART,
});

export const clearItem = (item) => ({
	type: CLEAR_ITEM,
	payload: item,
});
export const removeItem = (item) => ({
	type: REMOVE_ITEM,
	payload: item,
});
