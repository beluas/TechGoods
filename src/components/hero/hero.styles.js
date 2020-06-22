import styled from "styled-components";

export const HeroContainer = styled.div`
	border-radius: 2rem;
	width: 100%;
	display: flex;
	background-color: #eeeeee;

	position: relative;
	padding: 9rem 5rem;

	@media (max-width: 620px) {
		& {
			padding: 5rem 3rem;
		}
	}
`;

export const DescriptionContainer = styled.div`
	margin-left: auto;
	position: absolute;
	bottom: 90px;
	right: 80px;
	width: 25%;
	line-height: 150%;
	text-align: right;
	margin-bottom: -3rem;

	h2 {
		margin: 0;
		font-size: 16px;
		padding: 0;
	}

	p {
		margin-top: 5px;
		font-size: 15px;
		font-weight: 300;
	}

	@media (max-width: 1036px) {
		& {
			width: 35%;
		}
	}

	@media (max-width: 670px) {
		& {
			width: 50%;
			font-size: 13px;
			bottom: 55px;
			right: 40px;
		}
	}
`;

export const ImageContainer = styled.div`
	position: absolute;
	width: 400px;
	top: 10%;
	left: 35%;

	img {
		width: 100%;
	}

	@media (max-width: 1036px) {
		& {
			img {
				width: 80%;
			}
		}
	}

	@media (max-width: 900px) {
		& {
			left: 45%;
			img {
				width: 70%;
			}
		}
	}

	@media (max-width: 790px) {
		& {
			top: 10%;
			left: 50%;
			img {
				width: 50%;
			}
		}
	}

	@media (max-width: 570px) {
		& {
			top: 10%;
			left: 50%;
			img {
				width: 40%;
			}
		}
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	.title {
		width: 100%;
		h1 {
			font-size: 180px;
			font-weight: 800;
			letter-spacing: -10px;
			padding: 0;
			color: white;
			margin: 0;
		}
	}

	h2 {
		margin: 0;
		padding: 0;
		font-size: 50px;
	}

	h3 {
		font-size: 30px;
		margin: 0;
		padding: 0;
	}

	@media (max-width: 1250px) {
		& {
			.title {
				h1 {
					font-size: 150px;
				}
			}
		}
	}

	@media (max-width: 1036px) {
		& {
			.title {
				h1 {
					font-size: 115px;
					letter-spacing: -5px;
				}
			}

			button {
				padding: 0.8rem;
			}
		}
	}

	@media (max-width: 898px) {
		& {
			/* p {
				margin-top: 5px;
				font-size: 15px;
				font-weight: 300;
			} */
			.title {
				h1 {
					font-size: 95px;
					letter-spacing: 2px;
				}
			}

			button {
				font-size: 13px;
			}
		}
	}

	@media (max-width: 790px) {
		& {
			.title {
				h1 {
					font-size: 80px;
					letter-spacing: 4px;
				}
			}

			button {
				padding: 0.5rem;
				font-size: 12px;
			}

			h2 {
				margin: 0;
				padding: 0;
				font-size: 40px;
			}

			h3 {
				font-size: 20px;
				margin: 0;
				padding: 0;
			}
		}
	}

	@media (max-width: 700px) {
		& {
			.title {
				h1 {
					font-size: 60px;
					letter-spacing: 4px;
				}
			}

			h2 {
				margin: 0;
				padding: 0;
				font-size: 40px;
			}

			h3 {
				font-size: 20px;
				margin: 0;
				padding: 0;
			}
		}
	}

	@media (max-width: 570px) {
		& {
			.title {
				h1 {
					font-size: 50px;
					letter-spacing: 0px;
				}
			}

			h2 {
				margin: 0;
				padding: 0;
				font-size: 40px;
			}

			h3 {
				font-size: 20px;
				margin: 0;
				padding: 0;
			}
		}
	}

	@media (min-width: 1440px) {
		.title {
			h1 {
				font-size: 210px;
				letter-spacing: -5px;
			}
		}
	}
`;
