import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

export const ItemsContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const TitleContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	h2 {
		margin: 5rem auto;
		padding: 2rem;
		width: fit-content;
		border: solid black 2px;
		z-index: 999;
		position: relative;
		background-color: white;
	}

	div {
		min-height: 5px;
		width: 30%;
		z-index: 0;
		position: absolute;
		top: 50%;
		left: 35%;
		background-color: black;
	}
`;
