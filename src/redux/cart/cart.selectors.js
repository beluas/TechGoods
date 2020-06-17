import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectShowCart = createSelector(
	[selectCart],
	(cart) => cart.showCart
);

export const selectItems = createSelector([selectCart], (cart) => cart.items);

export const selectTotItems = createSelector(
	[selectCart],
	(cart) => cart.totItems
);

export const selectTotPrice = createSelector(
	[selectCart],
	(cart) => cart.totPrice
);
