import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	CheckoutItemsContainer,
	SubTotalContainer,
} from "./checkoutItems.styles";
import { selectItems, selectTotPrice } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../checkoutItem/CheckoutItem.component";
import { withRouter, Link } from "react-router-dom";

const CheckoutItems = ({ items, totPrice, history }) => {
	return (
		<CheckoutItemsContainer>
			{items.map((item) => (
				<CheckoutItem key={item.name} item={item} />
			))}
			<SubTotalContainer>
				<a
					onClick={() => history.goBack()}
					className="continue-shopping"
				>
					{" "}
					<i className="fas fa-long-arrow-alt-left"></i> Continue
					Shopping
				</a>
				<div className="total">
					<span>To pay </span>

					<span className="price"> {totPrice} $</span>
					{"  "}
				</div>
			</SubTotalContainer>
		</CheckoutItemsContainer>
	);
};

const stateToProps = createStructuredSelector({
	items: selectItems,
	totPrice: selectTotPrice,
});
export default withRouter(connect(stateToProps)(CheckoutItems));
