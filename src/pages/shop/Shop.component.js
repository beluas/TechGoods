import React from "react";
import { Route } from "react-router-dom";
import { ShopContainer } from "./shop.styles";
import CategoryOverview from "../../components/categoryOverview/CategoryOverview.component";

const Shop = ({ match }) => {
	console.log(match);
	return (
		<ShopContainer>
			<Route
				path={`/shop/:pageNumber`}
				render={() => (
					<CategoryOverview pageNumber={match.params.pageNumber} />
				)}
			/>
		</ShopContainer>
	);
};

export default Shop;
