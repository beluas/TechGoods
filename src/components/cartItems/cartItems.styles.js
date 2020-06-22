import styled from "styled-components";

export const CartItemsContainer = styled.div`
	width: 280px;
	height: 300px;
	position: relative;
	right: 180px;
	background: white;
	box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.5);

	overflow: auto;
	padding: 1rem;

	.price {
		width: 100%;
		text-align: center;
		font-size: 20px;
		margin: 1rem auto;
	}

	.checkout-btn {
		padding: 1rem 1.5rem;
		border-radius: 1rem;
		margin: 1rem auto;
		font-weight: 700;
		text-align: center;
		display: block;
		background: linear-gradient(
			166deg,
			rgba(227, 227, 227, 1) 0%,
			rgba(248, 248, 248, 1) 100%
		);
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
