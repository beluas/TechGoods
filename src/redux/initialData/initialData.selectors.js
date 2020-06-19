import { createSelector } from "reselect";

const selectInitialData = (state) => state.initialData;

export const selectItems = createSelector([selectInitialData], (initialData) =>
	Object.values(initialData.items).map((item) => Object.values(item.items))
);

export const selectItemsForShopPage = createSelector([selectItems], (items) =>
	items.reduce((accumulator, item) => accumulator.concat(item))
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
