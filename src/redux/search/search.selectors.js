import { createSelector } from "reselect";

const selectSearchItems = (state) => state.search;

export const selectSearchedItem = createSelector(
	[selectSearchItems],
	(searchedItems) => searchedItems.items
);
