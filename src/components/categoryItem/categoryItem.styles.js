import styled, { css } from "styled-components";

const ImgContainerAfterMixin = css`
	content: "";
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 1rem;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
`;

export const CategoryItemContainer = styled.div`
	flex-basis: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 200px;
	position: relative;

	button {
		top: 42%;
	}

	&:hover {
		.img-container:after {
			opacity: 1;
		}

		button {
			opacity: 1;
		}
	}

	.img-container {
		width: 100%;
		height: 100%;
		padding: 1.8rem;
		border-radius: 1rem;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(
			166deg,
			rgba(227, 227, 227, 1) 0%,
			rgba(248, 248, 248, 1) 100%
		);

		&:after {
			${ImgContainerAfterMixin}
		}

		img {
			cursor: pointer;
		}
	}

	.desc {
		align-self: flex-start;
	}
`;

export const PriceContainer = styled.strong`
	margin: 1.3rem 0 5rem;
	font-size: 20px;
	display: block;
	cursor: pointer;
`;

export const TitleItemContainer = styled.p`
	margin-top: 2.5rem;
	font-size: 16px;

	display: block;
	cursor: pointer;
`;
