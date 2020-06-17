import styled from "styled-components";

export const HeroContainer = styled.div`
	border-radius: 2rem;
	width: 100%;
	display: flex;
	background-color: #eeeeee;
	margin-top: 80px;

	position: relative;
	padding: 9rem 5rem;
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
`;

export const ImageContainer = styled.div`
	position: absolute;
	width: 400px;
	top: 0%;
	left: 40%;

	img {
		width: 100%;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	.title {
		width: 100%;
		h1 {
			font-size: 170px;
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
`;
