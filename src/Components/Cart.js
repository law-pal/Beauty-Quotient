import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Actions/cartActions';

 class Cart extends Component {
   render() {
      return (
         <div>
            
         </div>
      );
   }
}

// export default connect((state) => ({
//    cartItems: state.cart.cartItems
// }),
//    removeFromCart
// )(Cart);

removeFromCart() = state => ({
   cartItems: state.cart.cartItems
});
export default connect(removeFromCart)(Cart)