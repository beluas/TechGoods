import React from "react";
import { CustomButtonContainer } from "./customButton.styles";

const CustomButton = ({ width, children, onClick }) => {
	return (
		<CustomButtonContainer onClick={onClick} width={width}>
			{children}
		</CustomButtonContainer>
	);
};

export default CustomButton;
