import styled from "styled-components";

const getWidth = ({ width }) => {
	return { width: `${width}` };
};

const getColor = ({ inverted }) => {
	if (inverted) {
		return { color: "#f43c37", background: "white" };
	}

	return { color: "white", background: "#f43c37" };
};

const getIsShopButtonStyles = ({ isShopButton }) => {
	if (isShopButton) {
		return {
			position: "absolute",
			opacity: 0,
			top: "-10px",
			fontSize: "14px",
			padding: ".8em 1.2em",
			transition: "opacity .5s ease-in-out",
		};
	}
};

export const CustomButtonContainer = styled.button`
	display: flex;
	padding: 0.8em 1.8em;
	border: none;
	border-radius: 1.3em;

	font-size: 1em;
	justify-content: center;
	font-weight: bold;
	${getWidth};
	${getIsShopButtonStyles}
	${getColor};
	outline: none;
`;
