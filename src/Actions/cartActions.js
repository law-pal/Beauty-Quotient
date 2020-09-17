import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";



export const addToCart = (item) => ({

   type: ADD_TO_CART,
   payload: item

});
      

  export const removeFromCart = (item) => ({
      
   type: REMOVE_FROM_CART,
   payload: item

  });
   






  


//Revisit later//
  
//   const cartItems = getState().cart.cartItems.slice();
//   let alreadyExist = false;
//   console.log(cartItems)
//   cartItems.forEach((any) => {
//      if(any.id === item.id) {
//         alreadyExist = true;
//         any.count++;
//      }
//   });
//   if(!alreadyExist) {
//      cartItems.push({...item, count: 1});
//   }
//    dispatch({
//      type: ADD_TO_CART,
//      payload: {cartItems}
//   });
 
//   localStorage.setItem('cartItems', JSON.stringify(cartItems));

// Remove from cart function//
// const cartItems = getState().cart.cartItems.slice().filter(
//    (any) => any.id !== item.id
// );
// dispatch({
//    type: REMOVE_FROM_CART,
//    payload: {cartItems},
// });
// localStorage.setItem('cartItems', JSON.stringify(cartItems));