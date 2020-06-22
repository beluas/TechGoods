import React from "react";
import { Route } from "react-router-dom";
import { ShopContainer } from "./shop.styles";
import CategoryOverview from "../../components/categoryOverview/CategoryOverview.component";

const Shop = ({ match }) => {
	return (
		<ShopContainer>
			<Route
				path={`/shop/:category/:pageNumber`}
				render={() => (
					<CategoryOverview
						category={match.params.category}
						pageNumber={match.params.pageNumber}
					/>
				)}
			/>
		</ShopContainer>
	);
};

export default Shop;
