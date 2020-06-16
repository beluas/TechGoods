import { createSelector } from "reselect";

const selectInitialData = (state) => state.initialData;

export const selectCategories = createSelector(
	[selectInitialData],
	(initialData) => Object.values(initialData.items)
);
