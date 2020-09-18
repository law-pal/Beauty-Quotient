import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/actions";

  let initialState = {cartItems: []}

// export const cartReducer = (state =  {cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]')}, action) => {
    export  function cartReducer (state = initialState, action)  {
   switch(action.type) {
      case ADD_TO_CART:
         console.log(' from add cart')
         let cartItemsCopy = [...state.cartItems, action.payload]
         console.log(cartItemsCopy)
         return {cartItems: cartItemsCopy};
      case REMOVE_FROM_CART:
         console.log('remove from cart')
         let cartItemsRemove = [...state.cartItems]
         let itemIndex = cartItemsRemove.findIndex((item) => item.id === action.payload.id)
         let removedItem = cartItemsRemove.splice(itemIndex, 1);
         console.log(removedItem)
         console.log(action.payload)
         return {cartItems: cartItemsRemove};
         default:
            return state;
   }
}