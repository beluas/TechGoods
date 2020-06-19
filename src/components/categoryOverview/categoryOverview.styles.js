import styled from "styled-components";

export const CategoryOverviewContainer = styled.div`
	display: flex;
	flex-direction: column;

	.content {
		display: flex;
		justify-content: space-between;
		padding: 4rem;
	}

	.categories {
		flex-basis: 68%;
		display: flex;
		flex-direction: column;
		.items {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		img {
			width: 60%;
		}
	}
`;

export const HeaderSectionContainer = styled.div``;
