import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItems, selectTotPrice } from "../../redux/cart/cart.selectors";
import { CartItemsContainer, EmptyMessageContainer } from "./cartItems.styles";
import CartItem from "../cartItem/CartItem.component";

const CartItems = ({ items, totPrice }) => {
	return (
		<CartItemsContainer>
			{items.map((item) => (
				<CartItem key={item.name} {...item} />
			))}

			{items.length ? (
				<div className="price">Total : ${totPrice}</div>
			) : (
				<EmptyMessageContainer>
					{" "}
					<p>Cart is Empty</p>{" "}
				</EmptyMessageContainer>
			)}
		</CartItemsContainer>
	);
};

const stateToProps = createStructuredSelector({
	items: selectItems,
	totPrice: selectTotPrice,
});

export default connect(stateToProps)(CartItems);
