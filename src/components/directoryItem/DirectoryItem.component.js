import React from "react";
import { CategoryContainer, ImageContainer } from "./directoryItem.styles";
import { withRouter } from "react-router-dom";
import CustomButton from "../customButton/CustomButton.component";

//const getClassNameFromImgUrl = () => {};

const DirectoryCategory = ({ title, imgUrl, routeName, bgColor, history }) => {
	return (
		<CategoryContainer bgColor={bgColor}>
			<h3>Enjoy</h3>
			<h2>With</h2>
			<h1>{title}</h1>
			<CustomButton
				width="50%"
				onClick={() => history.push(`/${routeName}`)}
			>
				Browse
			</CustomButton>
			<ImageContainer>
				{" "}
				<img src={imgUrl} className={imgUrl} alt="" />{" "}
			</ImageContainer>
		</CategoryContainer>
	);
};

export default withRouter(DirectoryCategory);
