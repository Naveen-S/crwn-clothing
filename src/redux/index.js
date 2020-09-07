import {combineReducers} from 'redux';

import cartReducer from './cart_reducer';
import userReducer from './user_reducer';


export default combineReducers({
    user: userReducer,
    cart: cartReducer
})