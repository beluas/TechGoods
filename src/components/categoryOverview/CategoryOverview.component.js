import React from "react";

import {
	CategoryOverviewContainer,
	HeaderSectionContainer,
	NavContainer,
} from "./categoryOverview.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategories } from "../../redux/initialData/initialData.selectors";
import CategoryPreview from "../categoryPreview/CategoryPreview.component";

const CategoryOverview = ({ categories, history }) => {
	return (
		<CategoryOverviewContainer>
			<HeaderSectionContainer>
				<NavContainer>
					<span onClick={() => history.push("/")}>Home</span>
					<span>Products</span>
				</NavContainer>
				<h1>Products</h1>
			</HeaderSectionContainer>
			{categories.map((item) => (
				<CategoryPreview key={item.category} {...item} />
			))}
		</CategoryOverviewContainer>
	);
};

const stateToProps = createStructuredSelector({
	categories: selectCategories,
});

export default connect(stateToProps, null)(CategoryOverview);
