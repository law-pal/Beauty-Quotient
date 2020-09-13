import {combineReducers} from 'redux';
import  itemsReducer  from './itemsReducers';
//import blushesReducer from './itemsReducers'

const rootReducer = combineReducers({
    items: itemsReducer, 
})


// const blushReducer = combineReducers({
//     blushes: blushesReducer, 
// })

export default rootReducer;