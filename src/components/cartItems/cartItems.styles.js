import styled from "styled-components";

export const CartItemsContainer = styled.div`
	width: 350px;
	height: 300px;
	position: relative;
	left: -250px;
	background: white;
	box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.5);

	overflow: auto;
	padding: 1rem;

	.price {
		width: 100%;
		text-align: center;
		font-size: 24px;
		margin: 1rem auto;
	}
`;

export const EmptyMessageContainer = styled.div`
	font-size: 36px;
	display: flex;
	flex-direction: column;

	align-items: center;
	width: 100%;
	height: 100%;

	p {
		margin-top: auto;
	}
`;
