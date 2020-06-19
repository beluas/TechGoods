import React from "react";
import { PaginationContainer } from "./pagination.styles";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
	const pageNumbers = [];

	return (
		<div>
			<PaginationContainer>
				{pageNumbers.map((number) => (
					<li key={number}>
						<a
							onClick={() => paginate(number)}
							href={`/shop/:${number}`}
						>
							{number}
						</a>
					</li>
				))}
			</PaginationContainer>
		</div>
	);
};

export default Pagination;
