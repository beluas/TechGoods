import styled from "styled-components";

const getBgCategory = ({ bgColor }) => {
	return `background: ${bgColor};`;
};

export const CategoryContainer = styled.div`
	${getBgCategory}
	display:flex;
	position: relative;
	height: 350px;
	width: calc(25% - 1rem);
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);

	margin-left: 0.6rem;

	&:nth-child(3),
	&:nth-child(4) {
		width: calc(50% - 0.6rem);
	}

	&:nth-child(1),
	&:nth-child(4) {
		margin-left: 0;
	}

	margin-top: 2rem;
	border-radius: 2rem;
	padding: 2rem;

	h3,
	h2,
	h1 {
		margin: 0;
	}

	h3 {
		color: white;
		font-size: 15px;
	}

	h1 {
		color: rgba(255, 255, 255, 0.2);
		text-transform: uppercase;
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	h2 {
		font-weight: 900;
		margin: 0.5rem auto;
		font-size: 30px;
		color: white;
	}

	.desc {
		align-self: flex-end;

		button {
			position: relative;
			z-index: 555;
		}
	}

	@media (max-width: 1250px) {
		&,
		&:nth-child(3),
		&:nth-child(4) {
			width: calc(48% - 0.6rem);
			margin-left: 0;
			margin-right: 0;
		}
	}
	@media (max-width: 750px) {
		&,
		&:nth-child(3),
		&:nth-child(4) {
			width: 98%;
			margin-left: 0;
			margin-right: 0;
		}
	}
`;

export const ImageContainer = styled.div`
	position: absolute;

	&.Earphone {
		bottom: 0;
		right: 0;
	}

	img {
		width: 100%;
		height: 100%;
	}

	&.Gadgets {
		top: 40px;
		left: 60px;
	}

	&.Console {
		top: 30px;
		right: 50px;
	}

	&.Laptop {
		top: 0px;
		right: 0px;
	}

	&.Oculus {
		bottom: -5px;
		right: -25px;
	}

	&.Oculus {
		bottom: -4px;
		right: -10px;
	}
	&.Speaker {
		top: 0px;
		right: 0px;
	}

	@media (max-width: 1250px) {
		&.Gadgets {
			top: 40px;
			left: 150px;
			width: 75%;
		}

		&.Oculus {
			bottom: -4px;
			right: -30px;
		}

		&.Console {
			top: 45px;
			right: 20px;
			width: 60%;
		}

		&.Laptop {
			top: 0px;
			right: 0px;
			width: 65%;
		}
	}

	@media (max-width: 1250px) {
		& {
			img {
				width: 80%;
			}
		}
	}
`;
