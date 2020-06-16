import styled from "styled-components";

export const HeroContainer = styled.div`
	border-radius: 2rem;

	display: flex;
	background-color: #eeeeee;

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
	width: 90%;
	height: 100%;
	position: absolute;
	top: -5%;
	left: 9%;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 170px;
		font-weight: 800;
		letter-spacing: -10px;
		padding: 0;
		color: white;
		margin: 0;
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

export const CategoriesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const DirectoryContainer = styled.div``;
