import React from "react";
import { CartItemContainer } from "./cartItem.styles";

const CartItem = ({ imgUrl, name, price, quantity }) => {
	return (
		<CartItemContainer>
			<div className="img">
				<img src={imgUrl} alt={name} />
			</div>
			<div className="desc">
				<div className="name">{name}</div>
				<div className="price">
					{" "}
					{quantity} x {price}$
				</div>
			</div>
		</CartItemContainer>
	);
};

export default CartItem;
