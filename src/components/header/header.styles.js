import styled from "styled-components";

export const HeaderContainer = styled.ul`
	display: flex;
	list-style: none;
	width: 90%;
	padding: 2rem 0;
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
`;
