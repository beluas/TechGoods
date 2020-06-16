import React from "react";
import { Route } from "react-router-dom";
import { ShopContainer } from "./shop.styles";
import CategoryOverview from "../../components/categoryOverview/CategoryOverview.component";

const Shop = ({ match }) => {
	return (
		<ShopContainer>
			<Route exact path={`/shop`} component={CategoryOverview} />
			<Route path={`${match.path}/:categoryName`} />
		</ShopContainer>
	);
};

export default Shop;
