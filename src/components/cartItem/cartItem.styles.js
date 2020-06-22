import styled from "styled-components";

export const CartItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	.desc {
		display: flex;
		flex-direction: column;
		text-align: center;
		font-size: 16px;

		.price {
			font-size: 14px;
		}
	}
	.img {
		background: linear-gradient(
			166deg,
			rgba(227, 227, 227, 1) 0%,
			rgba(248, 248, 248, 1) 100%
		);
		padding: 1rem;
		border-radius: 1rem;
		img {
			width: 50px;
		}
	}
`;
