import { items } from "../../data/items";
import { directories } from "../../data/directories";
import { SHOW_CATEGORIES, SHOW_PRICES } from "./initialData.types";

const INITIAL_STATE = {
	items: null,
	directories: null,
	showCategories: false,
	showPrices: false,
};

const initialDataReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SHOW_CATEGORIES:
			return {
				...state,
				showCategories: !state.showCategories,
			};

		case SHOW_PRICES:
			return {
				...state,
				showPrices: !state.showPrices,
			};

		default:
			return {
				...state,
				items,
				directories,
			};
	}
};

export default initialDataReducer;
