export const addItem = (items, itemToAdd) => {
	const existingItem = items.find((item) => item.name === itemToAdd.name);

	if (existingItem) {
		return items.map((item) => {
			if (item.name === itemToAdd.name) {
				return { ...item, quantity: item.quantity + 1 };
			} else {
				return item;
			}
		});
	}

	return [...items, { ...itemToAdd, quantity: 1 }];
};
