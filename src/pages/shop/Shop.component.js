import React from "react";
import { Route } from "react-router-dom";
import { ShopContainer } from "./shop.styles";
import CollectionOverview from "../../components/categoryOverview/CategoryOverview.component";

const Shop = ({ match }) => {
	return (
		<ShopContainer>
			<Route
				exact
				path={`${match.path}/`}
				component={CollectionOverview}
			/>
			<Route path={`${match.path}/:categoryName`} />
		</ShopContainer>
	);
};

export default Shop;
