import React from "react";

import {
	CategoryOverviewContainer,
	HeaderSectionContainer,
	NavContainer,
} from "./categoryOverview.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItems } from "../../redux/initialData/initialData.selectors";
import CategoryPreview from "../categoryPreview/CategoryPreview.component";
import ShopSidebar from "../shopSidebar/ShopSidebar.component";

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
			<div className="content">
				<ShopSidebar />
				<div className="categories">
					{categories.map((item) => (
						<CategoryPreview key={item.category} {...item} />
					))}
				</div>
			</div>
		</CategoryOverviewContainer>
	);
};

const stateToProps = createStructuredSelector({
	categories: selectItems,
});

export default connect(stateToProps, null)(CategoryOverview);
