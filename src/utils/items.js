export const handleSearchClick = (items, searchTerm) => {
	return items.filter((item) => item.name.toLowerCase().includes(searchTerm));
};
