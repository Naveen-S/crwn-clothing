import { createSelector } from 'reselect';

// Input selector
const cartSelector = state => state.cart;

const getItems = (cart) => cart.cartItems;

// First selector which return cached cartItems
export const CartItemSelector = createSelector(cartSelector, getItems);

const getItemsCount = (cartItems) => {
    const itemsCount = cartItems.reduce((accumulator, cartItem ) => {
        return accumulator + cartItem.quantity
    }, 0);
    return itemsCount;
}

/* 
    Why Reselect?
    https://github.com/reduxjs/reselect#motivation-for-memoized-selectors

    - Selectors can compute derived data, allowing Redux to store the minimal possible state.
    - Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
    - Selectors are composable. They can be used as input to other selectors.

*/
// Second selector which uses CartItemSelector to compute quantity.
// Output selector
// Selectors are composable that's why CartItemSelector is used as an input selector to this.
export const CartQuantitySelector = createSelector(
    CartItemSelector,
    getItemsCount
);