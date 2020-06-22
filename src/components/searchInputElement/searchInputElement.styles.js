import styled from "styled-components";

export const SearchInputElementContainer = styled.div`
	display: flex;
	background-color: #e2e2e2;
	border-radius: 2rem;
	padding: 0.5rem;
	input {
		background: transparent;
		outline: none;
		border: none;
		padding-left: 1rem;
		font-size: 20px;
		font-family: "Montserrat";
		max-width: 200px;
		/* padding: 1rem 0.8rem; */
		&::placeholder {
			font-size: 20px;
			font-family: "Montserrat";
		}
	}

	i {
		cursor: pointer;
		color: white;
		margin-left: auto;
		width: 50px;
		height: 50px;
		font-size: 20px;
		border-radius: 50%;
		background-color: #f42c37;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
