import { createSelector } from "reselect";

const selectInitialData = (state) => state.initialData;

export const selectItems = createSelector([selectInitialData], (initialData) =>
	Object.values(initialData.items)
);

export const selectItemsInSpecificCategory = createSelector(
	[selectItems],
	(items) => (categoryToShow) =>
		categoryToShow !== "all"
			? items.find((item) => item.category === categoryToShow).items
			: null
);

export const selectAllItemsForShopPage = createSelector(
	[selectItems],
	(items) =>
		items
			.map((item) => item.items)
			.reduce((acc, item) => [...acc, ...item], [])
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
