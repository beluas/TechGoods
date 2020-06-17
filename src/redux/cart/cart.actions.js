import { ADD_ITEM, SHOW_CART } from "./cart.types";

export const addItem = (payload) => ({
	type: ADD_ITEM,
	payload,
});

export const showCart = () => ({
	type: SHOW_CART,
});
