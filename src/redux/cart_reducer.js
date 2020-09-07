import {TOGGLE_CART} from '../actions/types';

const INITIAL_STATE = {
    open: false
}

 const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TOGGLE_CART: {
            return {
                open: !state.open
            }
        }
        default: {
            return state;
        }
    }
}

export default cartReducer;