import {combineReducers} from 'redux';
import { cartReducer } from './cartReducers';
import  itemsReducer  from './itemsReducers';

const rootReducer = combineReducers({
    items: itemsReducer, 
    cart: cartReducer
})


export default rootReducer;