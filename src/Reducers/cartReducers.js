import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/actions";

  let initialState = {cartItems: []}

// export const cartReducer = (state =  {cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]')}, action) => {
    export  function cartReducer (state = initialState, action)  {
   switch(action.type) {
      case ADD_TO_CART:
         let cartItemsCopy = [...state.cartItems, action.payload]
         console.log(cartItemsCopy)
         return {cartItems: cartItemsCopy};
      case REMOVE_FROM_CART:
         let cartItemsRemove = state.cartItems.slice().filter(item =>  (any) => any.id !== item.id)
         console.log(action.payload)
         return {cartItems: cartItemsRemove};
         default:
            return state;
   }
}