import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	CheckoutItemsContainer,
	SubTotalContainer,
} from "./checkoutItems.styles";
import { selectItems, selectTotPrice } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../checkoutItem/CheckoutItem.component";

const CheckoutItems = ({ items, totPrice }) => {
	return (
		<CheckoutItemsContainer>
			{items.map((item) => (
				<CheckoutItem key={item.name} item={item} />
			))}
			<SubTotalContainer>
				<span className="continue-shopping"> -- Continue Shopping</span>
				<div className="total">
					<span className="light-grey">Subtotal</span>{" "}
					<span className="price">{totPrice} $</span>{" "}
				</div>
			</SubTotalContainer>
		</CheckoutItemsContainer>
	);
};

const stateToProps = createStructuredSelector({
	items: selectItems,
	totPrice: selectTotPrice,
});
export default connect(stateToProps)(CheckoutItems);
