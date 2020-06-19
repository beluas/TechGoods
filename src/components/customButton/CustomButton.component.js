import React from "react";
import { CustomButtonContainer } from "./customButton.styles";

const CustomButton = ({ width, children, onClick, inverted, isShopButton }) => {
	return (
		<CustomButtonContainer
			inverted={inverted}
			onClick={onClick}
			width={width}
			isShopButton={isShopButton}
		>
			{children}
		</CustomButtonContainer>
	);
};

export default CustomButton;
