import React from "react";
import {
	CategoryItemContainer,
	TitleItemContainer,
	PriceContainer,
} from "./categoryItem.styles";
import CustomButton from "../customButton/CustomButton.component";

const CategoryItem = ({ name, price, imgUrl }) => {
	return (
		<CategoryItemContainer>
			<img src={imgUrl} alt="img1" />
			<div className="desc">
				<TitleItemContainer>{name}</TitleItemContainer>

				<PriceContainer>$ {price}</PriceContainer>
			</div>
			<CustomButton>Add To Cart</CustomButton>
		</CategoryItemContainer>
	);
};

export default CategoryItem;
