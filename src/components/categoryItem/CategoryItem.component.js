import React from "react";
import { CategoryItemContainer } from "./categoryItem.styles";

const CategoryItem = ({ name, price, imgUrl }) => {
	return (
		<CategoryItemContainer>
			<img src={imgUrl} alt="" />
			<div className="desc">
				<div>{name}</div>
				<div>{price}</div>
			</div>
		</CategoryItemContainer>
	);
};

export default CategoryItem;
