import { SEARCHED_ITEMS } from "./search.types";

const INITIAL_STATE = {
	items: [],
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SEARCHED_ITEMS:
			return {
				...state,
				items: [...state.items, ...payload],
			};

		default:
			return state;
	}
};

export default searchReducer;
