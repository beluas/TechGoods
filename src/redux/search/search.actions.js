import { SEARCHED_ITEMS, UPDATE_SEARCH_TERM } from "./search.types";

export const storeSearchedItems = (items) => ({
	type: SEARCHED_ITEMS,
	payload: items,
});

export const updateSearchTerm = (searchTerm) => ({
	type: UPDATE_SEARCH_TERM,
	payload: searchTerm,
});
