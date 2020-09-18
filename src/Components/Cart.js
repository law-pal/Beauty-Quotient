import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Actions/cartActions';
import formatCurrency from './util';


 class Cart extends Component {

   render() {
      return (
         <div className='cart-main'>
               <h1>Shoping Cart</h1>
               <div>
                  {this.props.cartItems.length === 0 ? <div>Cart is Empty</div> : <div>You have {this.props.cartItems.length} in your cart {' '}</div>}
               </div>
                  <div>
                     <ul className='cart-items'>
                           {this.props.cartItems ? this.props.cartItems.map((item, index) => (
                                 <li key={index}>
                                    <div>
                                       <img src={item.image_link} alt={item.name}/>
                                    </div>
                                    <div><strong>{item.brand}</strong></div>
                                    <div><strong>{item.name}</strong></div>
                                    <div>{formatCurrency(item.price)}</div>
                                    <button onClick={() => this.props.dispatch(removeFromCart(item))}>Remove</button>
                                 </li>
                           )) : ''}
                        </ul>
                  </div>
                     {this.props.cartItems.length !== 0 && (
                  <div>
                        <div className='total'>
                           <div>
                              <strong>Total:{' '}</strong>
                              {formatCurrency(this.props.cartItems.reduce((a, c) => a + (c.price * c.count, 0)))}
                           </div>
                           <button className='button-primary'>Proceed</button>
                        </div>
                  </div>
                   )} 
          </div>  
      );
   }
}console.log(formatCurrency())

const mapStateToProps = state => ({
   cartItems: state.cart.cartItems
});
export default connect(mapStateToProps)(Cart);
