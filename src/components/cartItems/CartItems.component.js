import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItems, selectTotPrice } from "../../redux/cart/cart.selectors";
import { CartItemsContainer, EmptyMessageContainer } from "./cartItems.styles";
import CartItem from "../cartItem/CartItem.component";
import { Link } from "react-router-dom";

const CartItems = ({ items, totPrice }) => {
	return (
		<CartItemsContainer>
			<Link className="checkout-btn" to="/checkout">
				Go To Checkout
			</Link>
			{items.map((item) => (
				<CartItem key={item.name} {...item} />
			))}

			{items.length ? (
				<Link to="/checkout">
					<div className="price">To Pay : ${totPrice}</div>
				</Link>
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
