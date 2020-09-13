import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../Actions/actions';

export const initialState = {
    items: [],
    loading: false,
    hasErrors: false
}


export default function itemsReducer(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                loading: true
            }
            case GET_ITEMS_SUCCESS:
            
                return{
                    items: action.payload,
                    loading: false,
                    hasErrors: false
                }
               
            case GET_ITEMS_FAILURE:
                return{...state, loading: false, hasErrors: true}
        default:
            return state
    }


}

