import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCategories,
	selectShowCategories,
	selectShowPrices,
} from "../../redux/initialData/initialData.selectors";
import { ShopSidebarContainer } from "./shopSidebar.styles";
import {
	showCategoriesToggle,
	showPricesToggle,
} from "../../redux/initialData/initialData.actions";
import { withRouter, Link } from "react-router-dom";
import SearchInputElement from "../searchInputElement/SearchInputElement.component";

const ShopSidebar = ({
	categories,
	showCategoriesToggle,
	showCategories,
	showPrices,
	showPricesToggle,
	history,
}) => {
	return (
		<ShopSidebarContainer>
			<SearchInputElement />

			<div className="categories-sidebar">
				<h3 onClick={() => showCategoriesToggle()}>
					{" "}
					Product categories{" "}
					{showCategories ? (
						<i className="fas fa-angle-down"></i>
					) : (
						<i className="fas fa-angle-right"></i>
					)}
				</h3>
				<ul>
					<div className="categories-content">
						{showCategories
							? categories.map((category) => (
									<li
										onClick={() =>
											history.push(`/shop/${category}/1`)
										}
										key={category}
									>
										{category[0].toUpperCase() +
											category.substring(1)}
									</li>
							  ))
							: null}

						{showCategories ? (
							<li>
								<Link to="/shop/all/1">All Products</Link>
							</li>
						) : null}
					</div>
				</ul>

				<hr />
			</div>

			{/* <div className="prices">
				<h3 onClick={() => showPricesToggle()}>
					Choose Price
					{showPrices ? (
						<i className="fas fa-angle-down"></i>
					) : (
						<i className="fas fa-angle-right"></i>
					)}
				</h3>

				{showPrices ? (
					<ul>
						<li>50</li>
						<li>150</li>
						<li>250</li>
						<li>350</li>
						<li>450</li>
						<li>1050</li>
					</ul>
				) : null}
			</div> */}
		</ShopSidebarContainer>
	);
};

const stateToProps = createStructuredSelector({
	categories: selectCategories,
	showCategories: selectShowCategories,
	showPrices: selectShowPrices,
});

const dispatchToProps = (dispatch) => ({
	showCategoriesToggle: () => dispatch(showCategoriesToggle()),
	showPricesToggle: () => dispatch(showPricesToggle()),
});

export default withRouter(connect(stateToProps, dispatchToProps)(ShopSidebar));
