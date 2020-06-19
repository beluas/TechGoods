import React from "react";
import {
	CategoryItemContainer,
	TitleItemContainer,
	PriceContainer,
} from "./categoryItem.styles";
import CustomButton from "../customButton/CustomButton.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CategoryItem = ({ name, price, imgUrl, addItem }) => {
	return (
		<>
			<CategoryItemContainer>
				<div className="img-container">
					<img src={imgUrl} alt="img1" />
				</div>
				<div className="desc">
					<TitleItemContainer>{name}</TitleItemContainer>

					<PriceContainer>$ {price}</PriceContainer>
				</div>
				<CustomButton
					isShopButton
					onClick={() => addItem({ name, price, imgUrl })}
				>
					Add To Cart
				</CustomButton>
			</CategoryItemContainer>
		</>
	);
};

const dispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, dispatchToProps)(CategoryItem);
