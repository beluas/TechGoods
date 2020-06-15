import React from "react";
import { CategoryContainer, ImageContainer } from "./directoryCategory.styles";
import { withRouter } from "react-router-dom";

const getClassNameFromImgUrl = () => {};

const DirectoryCategory = ({ title, imgUrl, routeName, bgColor, history }) => {
	return (
		<CategoryContainer bgColor={bgColor}>
			<h3>Enjoy</h3>
			<h2>With</h2>
			<h1>{title}</h1>
			<button onClick={() => history.push(`/${routeName}`)}>
				Browse
			</button>
			<ImageContainer>
				{" "}
				<img src={imgUrl} className={imgUrl} alt="" />{" "}
			</ImageContainer>
		</CategoryContainer>
	);
};

export default withRouter(DirectoryCategory);
