import { SEARCHED_ITEMS } from "./search.types";

export const storeSearchedItems = (items) => ({
	type: SEARCHED_ITEMS,
	payload: items,
});
