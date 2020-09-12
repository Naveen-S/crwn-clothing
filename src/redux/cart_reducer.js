import { TOGGLE_CART, ADD_TO_CART, REMOVE_FROM_CART,DECREASE_FROM_CART } from '../actions/types';
import { addItemToCart, decreaseFromCart } from './cart_utils';

const INITIAL_STATE = {
    open: false,
    cartItems: [
        {
            id: 3,
            name: 'Brown Cowboy',
            imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
            price: 35,
            quantity: 3
          },
          {
            id: 4,
            name: 'Grey Brim',
            imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
            price: 25,
            quantity: 3
          }
    ],
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
                return item.id !== action.payload.id;
            })
            return {
                ...state,
                cartItems: newCartItems,
                // itemCount: state.itemCount - 1
            }
        }

        case DECREASE_FROM_CART: {
            return {
                ...state,
                cartItems: decreaseFromCart(state.cartItems, action.payload)
            }
        }

        default: {
            return state;
        }
    }
}

export default cartReducer;