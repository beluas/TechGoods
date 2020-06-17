import styled from "styled-components";

export const CategoryOverviewContainer = styled.div`
	display: flex;
	flex-direction: column;

	.content {
		display: flex;
		justify-content: space-between;
		flex-basis: 20%;
	}

	.categories {
		flex-basis: 75%;
	}
`;

export const HeaderSectionContainer = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #eeeeee;

	h1 {
		font-size: 54px;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 200px;
`;
