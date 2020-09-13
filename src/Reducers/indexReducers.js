import {combineReducers} from 'redux';
import  itemsReducer  from './itemsReducers';

const rootReducer = combineReducers({
    items: itemsReducer, 
})


export default rootReducer;