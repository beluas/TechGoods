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
		top: 0;
		right: 0;
		width: 65%;
		height: 60%;
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
		right: -25px;
	}
	&.Speaker {
		top: 0px;
		right: 0px;
		width: 80%;
		height: 60%;
	}
`;
