import styled from "styled-components";

export const BreadCrumbContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	padding: 4rem 0 2rem;
	/* border-bottom: 3px solid #eeeeee; */

	h1 {
		font-size: 40px;
		font-weight: 700;
		margin-bottom: auto;
	}
	.links {
		display: flex;
		width: 100%;
		justify-content: space-around;

		span {
			padding: 1rem;
			border: 2px solid #fb414c;
			cursor: pointer;
			font-weight: 900;
		}
	}
`;
