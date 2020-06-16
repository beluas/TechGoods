import React from "react";
import { CustomButtonContainer } from "./customButton.styles";

const CustomButton = ({ width, children }) => {
	return (
		<CustomButtonContainer width={width}>{children}</CustomButtonContainer>
	);
};

export default CustomButton;
