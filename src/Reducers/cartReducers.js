import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/actions";



export const cartReducer = (state = {cartItems: JSON.parse(localStorage.getItem('carItems') || '[]')}, action) => {
   switch(action.type) {
      case ADD_TO_CART:
         return {cartItems: action.payload.cartitems};
      case REMOVE_FROM_CART:
         return {cartItems: action.payload.cartItems};
         default:
            return state;
   }
}