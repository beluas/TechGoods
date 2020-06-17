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

const ShopSidebar = ({
	categories,
	showCategoriesToggle,
	showCategories,
	showPrices,
	showPricesToggle,
}) => {
	return (
		<ShopSidebarContainer>
			<input type="text" placeholder="search Item" />

			<div className="categories">
				<h3 onClick={() => showCategoriesToggle()}>
					{" "}
					Product categories{" "}
					{showCategories ? (
						<span>&#9655;</span>
					) : (
						<span>&#9661;</span>
					)}
				</h3>
				<ul>
					<div
						// className={`${
						// 	showCategories
						// 		? "categories-content-active"
						// 		: "categories-content-disabled"
						// }`}
						className="categories-content"
					>
						{showCategories
							? categories.map((category) => (
									<li key={category}>
										{category[0].toUpperCase() +
											category.substring(1)}
									</li>
							  ))
							: null}
					</div>
				</ul>

				<hr />
			</div>

			<div className="prices">
				<h3 onClick={() => showPricesToggle()}>
					Choose Price{" "}
					{showPrices ? <span>&#9655;</span> : <span>&#9661;</span>}
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
			</div>
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

export default connect(stateToProps, dispatchToProps)(ShopSidebar);
