import styled from "styled-components";

export const CartItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;

	.desc {
		display: flex;
		flex-direction: column;
	}
	.img {
		img {
			width: 80px;
		}
	}
`;
