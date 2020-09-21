import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Actions/cartActions';
import formatCurrency from './util';
import Bag from './Icons/shopping-bag-solid.svg';


 class Cart extends Component {

   render() {
      console.log(this.props.cartItems)
      return (
            <div className='cart-main'>
                <div>
                  <h1>Shopping Bag</h1>
                  <img src={Bag} alt='#' width='30'/>
                     {this.props.cartItems.length === 0 ? <div>Bag is Empty</div> : <div>You have {this.props.cartItems.length} items in your bag {' '}</div>}
                  </div>
                  <div className='items-wrapper'>
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
                        {this.props.cartItems.length !== 0 && (
                     <div>
                           <div>
                              <div>
                                 <strong>Total:{' '}</strong>
                                 {formatCurrency(this.props.cartItems.reduce((total, c) => total + (c.price * c.count, 0)))}
                              </div>
                              <button className='proceed'>Proceed</button>
                           </div>
                     </div>
                     )} 
                  </div>
               </div>
      );
   }
}

const mapStateToProps = state => ({
   cartItems: state.cart.cartItems
});
export default connect(mapStateToProps)(Cart);
