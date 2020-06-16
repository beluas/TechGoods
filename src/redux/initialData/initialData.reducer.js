import { items } from "../../data/items";
import { directories } from "../../data/directories";

const initialDataReducer = (state, { type, payload }) => {
	switch (type) {
		default:
			return {
				...state,
				items,
				directories,
			};
	}
};

export default initialDataReducer;
