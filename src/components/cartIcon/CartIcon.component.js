import React from "react";
import { ReactComponent as Cart } from "./cart.svg";
import { CartIconContainer } from "./cartIcon.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectShowCart,
	selectTotItems,
} from "../../redux/cart/cart.selectors";
import CartItems from "../cartItems/CartItems.component";
import { showCart } from "../../redux/cart/cart.actions";

const CartIcon = ({ showCart, showCartToggle, totItems }) => {
	return (
		<CartIconContainer onClick={() => showCartToggle()}>
			<Cart />
			<span>{totItems}</span>
			{showCart ? <CartItems /> : null}
		</CartIconContainer>
	);
};

const stateToProps = createStructuredSelector({
	showCart: selectShowCart,
	totItems: selectTotItems,
});

const dispatchToProps = (dispatch) => ({
	showCartToggle: () => dispatch(showCart()),
});

export default connect(stateToProps, dispatchToProps)(CartIcon);
