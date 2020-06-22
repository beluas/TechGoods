import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import {
	selectSearchTerm,
	selectSearchedItem,
} from "../../redux/search/search.selectors";
import CategoryItem from "../../components/categoryItem/CategoryItem.component";

import { ResultContainer } from "./results.styles";

const Results = ({ searchTerm, searchedItems }) => {
	console.log("rendered");

	return (
		<ResultContainer>
			<Breadcrumb
				title={`Results for : ${searchTerm}`}
				links={[{ label: "Products", routeName: "shop/all/1" }]}
			/>
			<div className="items">
				{searchedItems.map((item) => (
					<CategoryItem key={item.name} {...item} />
				))}
			</div>
		</ResultContainer>
	);
};

const stateToProps = createStructuredSelector({
	searchTerm: selectSearchTerm,
	searchedItems: selectSearchedItem,
});

export default connect(stateToProps, null)(Results);
