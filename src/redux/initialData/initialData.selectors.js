import { createSelector } from "reselect";

const selectInitialData = (state) => state.initialData;

export const selectItems = createSelector([selectInitialData], (initialData) =>
	Object.values(initialData.items)
);

export const selectCategories = createSelector(
	[selectInitialData],
	(initialData) => {
		return Object.keys(initialData.items);
	}
);

export const selectShowCategories = createSelector(
	[selectInitialData],
	(initialData) => initialData.showCategories
);

export const selectShowPrices = createSelector(
	[selectInitialData],
	(initialData) => initialData.showPrices
);
