import React from "react";
import { CategoryContainer, ImageContainer } from "./directoryItem.styles";
import { withRouter } from "react-router-dom";
import CustomButton from "../customButton/CustomButton.component";

//const getClassNameFromImgUrl = () => {};

const DirectoryItem = ({
	title,
	imgUrl,
	routeName,
	bgColor,
	history,
	subTitle,
	subSubtitle,
	inverted,
}) => {
	return (
		<CategoryContainer bgColor={bgColor}>
			<ImageContainer className={title}>
				{" "}
				<img src={imgUrl} className={imgUrl} alt="" />{" "}
			</ImageContainer>

			<div className="desc">
				<h3>{subSubtitle}</h3>
				<h2>{subTitle}</h2>
				<h1>{title}</h1>
				<CustomButton
					inverted={inverted}
					width="120px"
					onClick={() => history.push(`/${routeName}`)}
				>
					Browse
				</CustomButton>
			</div>
		</CategoryContainer>
	);
};

export default withRouter(DirectoryItem);
