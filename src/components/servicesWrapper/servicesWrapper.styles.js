import styled from "styled-components";

export const ServicesWrapperContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;

	& > div {
		flex-basis: 48%;
	}

	@media (max-width: 650px) {
		& > div {
			flex-basis: 100%;
		}
	}
`;
