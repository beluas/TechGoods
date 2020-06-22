import { createSelector } from "reselect";

const selectSearchItems = (state) => state.search;

export const selectSearchedItem = createSelector(
	[selectSearchItems],
	(search) => search.items
);

export const selectSearchTerm = createSelector(
	[selectSearchItems],
	(search) => search.searchTerm
);
