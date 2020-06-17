import styled from "styled-components";

export const BreadCrumbContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	padding: 2rem 0;
	background-color: #eeeeee;

	h1 {
		font-size: 54px;
	}
	.links {
		display: flex;
		width: 30%;
		justify-content: space-around;

		span {
			cursor: pointer;
		}
	}
`;
