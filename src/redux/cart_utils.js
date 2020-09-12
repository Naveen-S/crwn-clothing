export const addItemToCart = (cartItems, itemToAdd) => {
    let existing = cartItems.find(item => {
        return item.id === itemToAdd.id;
    })

    if (existing) {
        return cartItems.map(item => {
            if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 }
            } else {
                return item;
            }
        })
    } else {
        return [...cartItems, { ...itemToAdd, quantity: 1 }];
    }
}

export const getItemCount = (cartItems) => {
    let count = 0;
    cartItems.forEach(item => {
        count += item.quantity;
    })
    return count;
}