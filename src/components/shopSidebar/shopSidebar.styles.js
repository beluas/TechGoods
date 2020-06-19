import styled from "styled-components";

export const ShopSidebarContainer = styled.div`
	flex-basis: 27%;

	h3 {
		font-family: poppins;
		font-weight: 400;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 21px;
		i {
		}
	}

	.categories-content {
		width: 50%;
		margin: 0 auto;

		li {
			line-height: 180%;
		}
	}

	/* .categories-content-disabled {
		opacity: 0;
		transition: opacity 2.5s ease-in-out;
	}

	.categories-content-active {
		opacity: 1;
	} */
`;
