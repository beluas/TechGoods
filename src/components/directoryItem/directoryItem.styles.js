import styled from "styled-components";

const getBgCategory = ({ bgColor }) => {
	return `background-color: ${bgColor};`;
};

export const CategoryContainer = styled.div`
	${getBgCategory}

	position:relative;
	height: 300px;
	flex-basis: 23%;
	margin-left: 1.5rem;

	&:nth-child(3),
	&:nth-child(4) {
		flex-basis: 45%;
	}

	&:nth-child(1),
	&:nth-child(4) {
		margin-left: 0;
	}

	margin-top: 2rem;
	border-radius: 2rem;
	padding: 2rem;
`;

export const ImageContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 80%;
	height: 80%;

	img {
		width: 100%;
		height: 100%;
	}
`;
