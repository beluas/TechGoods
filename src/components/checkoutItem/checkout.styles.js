import styled from "styled-components";

export const CheckoutItemContainer = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	margin-bottom: 5rem;
	.quantity-box {
		flex-basis: 22%;
		text-align: center;
		.quantity {
			padding: 0.4rem 1.4rem;
			font-size: 14px;
			font-weight: 900;
			margin: 0 0.7rem;
			border-radius: 0.5rem;
			border: 1px solid #bfbfbf;
			color: black;
		}
	}

	.title-box,
	.price-box,
	.amount-change {
		text-align: center;

		font-weight: 900;
		flex-basis: 22%;
	}

	.remove-icon-box {
		font-size: 20px;
		font-weight: 900;
		flex-basis: 6%;
		text-align: center;
	}

	.remove-icon-box,
	.amount-change {
		cursor: pointer;
	}

	.title-box {
		font-size: 20px;
	}

	.img-box {
		display: flex;
		justify-content: center;
		border: 1px solid #bfbfbf;
		padding: 1.5rem;
		flex-basis: 20%;
		img {
			width: 85%;
		}
	}

	@media (max-width: 1028px) {
		.title-box,
		.price-box {
			font-size: 18px;
		}

		.img-box {
			padding: 1rem;
			img {
				width: 100%;
			}
		}
	}

	@media (max-width: 828px) {
		margin-bottom: 2rem;

		.title-box,
		.price-box {
			font-size: 15px;
		}

		.img-box {
			flex-basis: 18%;
			padding: 0.5rem;
			img {
				width: 100%;
			}
		}

		.quantity-box {
		}
	}

	@media (max-width: 560px) {
		margin-bottom: 1rem;
		.quantity-box {
			display: flex;
			justify-content: space-around;
			flex-direction: column;

			.quantity {
				margin: 0.5rem auto;
			}
		}

		.img-box {
			border: none;
			img {
				width: 100%;
			}
		}
	}

	@media (max-width: 430px) {
		.title-box,
		.price-box {
			font-size: 12px;
		}

		.quantity-box {
			.quantity {
				font-size: 12px;
			}
		}
	}
`;
