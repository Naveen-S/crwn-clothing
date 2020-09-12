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

export const removeFromCart = (cartItems, itemToDelete) => {
    return cartItems.filter(item => {
        if (item.id === itemToDelete.id) {
            return false;
        }
        return true;
    })
}

export const decreaseFromCart = (cartItems, itemToDelete) => {
    if (itemToDelete.quantity === 1) {
        return removeFromCart(cartItems, itemToDelete);
    } else {
        return cartItems.map(item => {
            if (item.id === itemToDelete.id) {
                return {...item, quantity: item.quantity - 1}
            }
            return item;
        })
    }
}

export const getItemCount = (cartItems) => {
    let count = 0;
    cartItems.forEach(item => {
        count += item.quantity;
    })
    return count;
}