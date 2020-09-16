import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions"


export const addToCart = (item) => (dispatch, getState) => {
   const cartItems = getState().cart.cartItems.slice();
   let alreadyExist = false;
   cartItems.forEach((any) => {
      if(any.id === item.id) {
         alreadyExist = true;
         any.count++;
      }
   });
   if(!alreadyExist) {
      cartItems.push({...item, count: 1});
   }
   dispatch({
      type: ADD_TO_CART,
      payload: {cartItems},
   });
   localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = (item) => (dispatch, getState) => {
   const cartItems = getState().cart.cartItems.slice().filte(
      (any) => any.id != item.id
   );
   dispatch({
      type: REMOVE_FROM_CART,
      payload: {cartItems},
   });
   localStorage.setItem('cartItems', JSON.stringify(cartItems));
}