import { SHOW_CATEGORIES, SHOW_PRICES } from "./initialData.types";

export const showCategoriesToggle = () => ({
	type: SHOW_CATEGORIES,
});

export const showPricesToggle = () => ({
	type: SHOW_PRICES,
});
