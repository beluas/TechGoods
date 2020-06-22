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

	.pagination {
		display: flex;

		li {
			a {
				border-radius: 0.5rem;
				font-size: 20px;

				padding: 0.5rem 0.9rem;
				margin-right: 1rem;
				font-weight: 900;
				font-family: "Poppins";
				transition: background-color 0.3s ease-in-out,
					color 0.2s ease-in-out;
			}

			&.currentPage a,
			&:hover a {
				background-color: #dc2832;
				color: white;
			}
		}
	}
`;

export const HeaderSectionContainer = styled.div``;
