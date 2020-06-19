import React from "react";

import { CategoryOverviewContainer } from "./categoryOverview.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItemsForShopPage } from "../../redux/initialData/initialData.selectors";

import ShopSidebar from "../shopSidebar/ShopSidebar.component";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import CategoryItem from "../categoryItem/CategoryItem.component";
import Pagination from "react-router-pagination";

const CategoryOverview = ({ items, pageNumber }) => {
	console.log(pageNumber);

	// // Get current items
	// console.log(items);

	const indexOfLastItem = pageNumber * 10;
	const indexOfFirstItem = indexOfLastItem - 10;
	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
	// console.log(indexOfFirstItem, indexOfLastItem);
	// // Change page
	// const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const totalPages = Math.ceil(items.length / 10);

	const match = {
		path: "/shop/:pageNumber",
		params: {
			pageNumber: pageNumber,
		},
	};

	return (
		<CategoryOverviewContainer>
			<Breadcrumb
				links={[{ label: "Products", routeName: "product" }]}
				title="Products"
			/>

			<div className="content">
				<ShopSidebar />
				<div className="categories">
					<div className="items">
						{currentItems.map((item) => (
							<CategoryItem key={item.name} {...item} />
						))}
					</div>
					<Pagination
						spread={3}
						match={match}
						totalPages={totalPages}
						pageNumber={pageNumber}
					/>
				</div>
			</div>
		</CategoryOverviewContainer>
	);
};

const stateToProps = createStructuredSelector({
	items: selectItemsForShopPage,
});

export default connect(stateToProps, null)(CategoryOverview);
