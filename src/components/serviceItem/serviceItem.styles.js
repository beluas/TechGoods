import styled from "styled-components";

export const ServiceItemContainer = styled.div`
	display: flex;
	margin: 1rem auto;
	.desc {
		margin-left: 1rem;

		h3 {
			margin-bottom: 0;
		}
		p {
			margin-top: 0.3rem;
		}
	}

	@media (max-width: 400px) {
		h3 {
			font-size: 15px;
		}
	}
`;
