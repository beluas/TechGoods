import React from "react";

import { CategoryOverviewContainer } from "./categoryOverview.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItems } from "../../redux/initialData/initialData.selectors";
import CategoryPreview from "../categoryPreview/CategoryPreview.component";
import ShopSidebar from "../shopSidebar/ShopSidebar.component";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";

const CategoryOverview = ({ items }) => {
	return (
		<CategoryOverviewContainer>
			<Breadcrumb
				links={[{ label: "Products", routeName: "product" }]}
				title="Products"
			/>

			<div className="content">
				<ShopSidebar />
				<div className="categories">
					{items.map((item) => (
						<CategoryPreview key={item.category} {...item} />
					))}
				</div>
			</div>
		</CategoryOverviewContainer>
	);
};

const stateToProps = createStructuredSelector({
	items: selectItems,
});

export default connect(stateToProps, null)(CategoryOverview);
