import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart_reducer';
import userReducer from './user_reducer';
import directoryReducer from './directory_reducer';
import shopReducer from './shop_reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'directory', 'shop']
};

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);