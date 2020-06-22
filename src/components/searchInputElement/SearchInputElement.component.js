import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllItemsInOneArray } from "../../redux/initialData/initialData.selectors";
import { SearchInputElementContainer } from "./searchInputElement.styles";
import { handleSearchClick } from "../../utils/items";
import { withRouter } from "react-router-dom";
import {
	storeSearchedItems,
	updateSearchTerm,
} from "../../redux/search/search.actions";

class SearchInputElement extends React.Component {
	state = {
		searchTerm: "",
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const {
			items,
			history,
			storeSearchedItems,
			updateSearchTerm,
		} = this.props;
		const { searchTerm } = this.state;
		return (
			<SearchInputElementContainer>
				<input
					onChange={(e) => this.handleChange(e)}
					type="text"
					name="searchTerm"
					value={searchTerm}
					placeholder="Search Here"
				/>

				<i
					onClick={() => {
						console.log(items);
						const searchedItems = handleSearchClick(
							items,
							searchTerm
						);

						storeSearchedItems(searchedItems);
						updateSearchTerm(searchTerm);
						history.push("/shop/results");
					}}
					className="fas fa-search"
				></i>
			</SearchInputElementContainer>
		);
	}
}

const stateToProps = createStructuredSelector({
	items: selectAllItemsInOneArray,
});

const dispatchToProps = (dispatch) => ({
	storeSearchedItems: (items) => dispatch(storeSearchedItems(items)),
	updateSearchTerm: (searchTerm) => dispatch(updateSearchTerm(searchTerm)),
});

export default withRouter(
	connect(stateToProps, dispatchToProps)(SearchInputElement)
);
