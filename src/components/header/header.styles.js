import styled from "styled-components";

export const HeaderContainer = styled.ul`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	margin: 0 auto;
	z-index: 888;
	background: rgba(255, 255, 255, 0.9);

	box-shadow: 0px 1px 5px 2px rgba(244, 60, 55, 0.5);

	ul {
		display: flex;

		width: 90%;
		padding: 1rem 0;
		margin: 0 auto;

		li {
			margin: 0 2rem;
		}

		.brand {
			margin-right: auto;
		}

		.cart {
			margin-left: auto;
			width: 24px;
			height: 24px;
		}
	}
`;
