import React from "react";
import { ReactComponent as Cart } from "./cart.svg";
import { CartIconContainer } from "./cartIcon.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CartIcon = () => {
	return (
		<CartIconContainer>
			<Cart />
			<span>4</span>
		</CartIconContainer>
	);
};

const stateToProps = createStructuredSelector({
	//totItems:
});

export default connect()(CartIcon);
