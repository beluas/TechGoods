import { SEARCHED_ITEMS, UPDATE_SEARCH_TERM } from "./search.types";

const INITIAL_STATE = {
	items: [],
	searchTerm: "",
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SEARCHED_ITEMS:
			return {
				...state,
				items: [...payload],
			};
		case UPDATE_SEARCH_TERM:
			return {
				...state,
				searchTerm: payload,
			};

		default:
			return state;
	}
};

export default searchReducer;
