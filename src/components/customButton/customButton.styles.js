import styled from "styled-components";

const getWidth = (props) => {
	return { width: `${props.width}` };
};

export const CustomButtonContainer = styled.div`
	display: flex;
	${getWidth};
	padding: 0.8em 1.8em;
	background-color: #f42c37;
	border: none;
	border-radius: 1.3em;
	color: white;
	font-size: 1em;
	justify-content: center;
	font-weight: bold;
`;
