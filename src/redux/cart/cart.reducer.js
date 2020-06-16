import { ADD_ITEM } from "./cart.types";

const INITIAL_STATE = {
	totItems: 0,
	items: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ADD_ITEM:
			return {
				...state,
				items: [...state.items, payload],
			};

		default:
			return state;
	}
};

export default cartReducer;
