import React from "react";
import { CheckoutItemContainer } from "./checkout.styles";

import { connect } from "react-redux";

import { addItem, removeItem, clearItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, decrement, increment, clearItem }) => {
	const { name, price, imgUrl, quantity } = item;
	return (
		<>
			<CheckoutItemContainer>
				<li className="img-box">
					<img src={imgUrl} alt="" />
				</li>
				<li className="title-box">{name}</li>
				<li className="quantity-box">
					<span
						onClick={() => decrement(item)}
						className="amount-change"
					>
						-
					</span>{" "}
					<span className="quantity">{quantity}</span>{" "}
					<span
						onClick={() => increment(item)}
						className="amount-change"
					>
						+
					</span>
				</li>
				<li className="price-box">$ {price}</li>
				<li onClick={() => clearItem(item)} className="remove-icon-box">
					X
				</li>
			</CheckoutItemContainer>
		</>
	);
};

const dispatchToProps = (dispatch) => ({
	increment: (item) => dispatch(addItem(item)),
	decrement: (item) => dispatch(removeItem(item)),
	clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, dispatchToProps)(CheckoutItem);
