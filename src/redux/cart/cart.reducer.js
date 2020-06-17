import { ADD_ITEM, SHOW_CART } from "./cart.types";
import { addItem } from "../../utils/cart";

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

		default:
			return state;
	}
};

export default cartReducer;
