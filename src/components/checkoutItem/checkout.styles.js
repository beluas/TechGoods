import styled from "styled-components";

export const CheckoutItemContainer = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;

	.quantity-box {
		.quantity {
			padding: 0.4rem 1.4rem;
			font-size: 14px;
			font-weight: 900;
			margin: 0 0.7rem;
			border-radius: 0.5rem;
			border: 1px solid #bfbfbf;
			color: #bfbfbf;
		}
	}

	.title-box,
	.price-box,
	.remove-icon-box,
	.amount-change {
		font-size: 20px;
		font-weight: 900;
	}

	.remove-icon-box,
	.amount-change {
		cursor: pointer;
	}

	.title-box {
		font-size: 28px;
	}

	.img-box {
	}
`;
