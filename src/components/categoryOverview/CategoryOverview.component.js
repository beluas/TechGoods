import React from "react";
import CategoryItem from "../categoryItem/CategoryItem.component";
import { items } from "../../data/items";
import { CategoryOverviewContainer } from "./categoryOverview.styles";

const CategoryOverview = () => {
	return (
		<CategoryOverviewContainer>
			{items.map((item) => (
				<CategoryItem key={item.name} {...item} />
			))}
		</CategoryOverviewContainer>
	);
};

export default CategoryOverview;
