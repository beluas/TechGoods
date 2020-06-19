import { ADD_ITEM, SHOW_CART, REMOVE_ITEM, CLEAR_ITEM } from "./cart.types";
import { addItem, removeItem, clearItem } from "../../utils/cart";

const INITIAL_STATE = {
	totItems: 0,
	items: [],
	showCart: false,
	totPrice: 0,
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ADD_ITEM:
			return {
				...state,
				items: addItem(state.items, payload),
				totItems: state.totItems + 1,
				totPrice: state.totPrice + parseFloat(payload.price),
			};
		case SHOW_CART:
			return {
				...state,
				showCart: !state.showCart,
			};
		case REMOVE_ITEM:
			return {
				...state,
				items: removeItem(state.items, payload),
				totPrice: state.totPrice - payload.price,
				totItems: state.totItems - 1,
			};
		case CLEAR_ITEM:
			return {
				...state,
				items: clearItem(state.items, payload),
				totPrice: state.totPrice - payload.price * payload.quantity,
				totItems: state.totItems - payload.quantity,
			};

		default:
			return state;
	}
};

export default cartReducer;
