import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from "./actions";

//Creating my actions using action creator

export const getItems = () => ({
    type: GET_ITEMS,
})

export const getItemsSuccess = (items) => ({
    type: GET_ITEMS_SUCCESS,
    payload: items,
})

export const getItemsFailure = () => ({
    type: GET_ITEMS_FAILURE,
})

//Combining all action in an asynchronous thunk

export function fetchItemsLipstick() {
    return async (dispatch) => {
        dispatch(getItems())
        try {
            const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
            const data = await response.json()
            dispatch(getItemsSuccess(data))
        } catch (error) {
            dispatch(getItemsFailure())
        }
    }
}