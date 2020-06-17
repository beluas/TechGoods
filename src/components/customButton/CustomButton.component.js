import React from "react";
import { CustomButtonContainer } from "./customButton.styles";

const CustomButton = ({ width, children, onClick, inverted }) => {
	return (
		<CustomButtonContainer
			inverted={inverted}
			onClick={onClick}
			width={width}
		>
			{children}
		</CustomButtonContainer>
	);
};

export default CustomButton;
