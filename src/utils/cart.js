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

export const clearItem = (items, itemToRemove) => {
	return items.filter((item) => item.name !== itemToRemove.name);
};

export const removeItem = (items, itemToRemove) => {
	if (itemToRemove.quantity > 1) {
		return items.map((item) => {
			if (item.name === itemToRemove.name) {
				if (item.quantity > 1) {
					return { ...item, quantity: item.quantity - 1 };
				} else {
				}
			}
			return item;
		});
	} else {
		return items.filter((item) => item.name !== itemToRemove.name);
	}
};
