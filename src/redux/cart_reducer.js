import { TOGGLE_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';
import { addItemToCart, getItemCount } from './cart_utils';

const INITIAL_STATE = {
    open: false,
    cartItems: [],
    // itemCount: 0 // Implementing this using reselect
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART: {
            return {
                ...state,
                open: !state.open
            }
        }

        case ADD_TO_CART: {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                // itemCount: getItemCount(state.cartItems) + 1
            }
        }

        case REMOVE_FROM_CART: {
            let newCartItems = state.cartItems.filter((item) => {
                return item === action.payload;
            })
            return {
                ...state,
                cartItems: newCartItems,
                // itemCount: state.itemCount - 1
            }
        }

        default: {
            return state;
        }
    }
}

export default cartReducer;