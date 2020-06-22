import styled from "styled-components";

export const CheckoutItemsContainer = styled.div`
	width: 90%;
	margin: 0 auto 5rem;
	background: linear-gradient(
		166deg,
		rgba(220, 220, 220, 0.5) 0%,
		rgba(230, 230, 230, 0.5) 50%,
		rgba(248, 248, 248, 1) 100%
	);
	padding: 3rem;
	border-radius: 2rem;
	@media (max-width: 828px) {
		padding: 1rem;
	}
`;

export const SubTotalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 3rem;

	.total {
		border: 2px solid rgba(244, 44, 55, 0.8);
		color: black;
		border-radius: 1rem;
		font-weight: 900;

		.price {
			margin-left: 0.3rem;
		}
	}

	.continue-shopping {
		display: flex;
		align-items: center;
		justify-content: space-between;
		i {
			margin-right: 2rem;
			position: relative;
			color: #f42c37;
			font-size: 30px;
			top: 1px;
		}
	}

	.continue-shopping,
	.total {
		padding: 1rem 2rem;

		font-size: 20px;
		cursor: pointer;
	}

	@media (max-width: 828px) {
		.continue-shopping,
		.total {
			font-size: 14px;
			display: flex;
			align-items: center;
			padding: 0.8rem 1.4rem;
		}
	}

	@media (max-width: 500px) {
		.continue-shopping,
		.total {
			font-size: 11px;
			display: flex;
			align-items: center;
			padding: 0.2rem 0.5rem;
		}

		.continue-shopping {
			i {
				margin-right: 0.5rem;
			}
		}
	}
`;
