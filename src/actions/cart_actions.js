import { TOGGLE_CART, ADD_TO_CART, REMOVE_FROM_CART, DECREASE_FROM_CART } from './types';

export const toggleCart = () => {
    return {
        type: TOGGLE_CART
    }
}

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

export const decreaseFromCart = (item) => {
    return {
        type: DECREASE_FROM_CART,
        payload: item
    }
}