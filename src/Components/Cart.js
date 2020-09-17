import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Actions/cartActions';
import formatCurrency from './util';


 class Cart extends Component {

   componentDidMount(){
      this.props.dispatch(removeFromCart())
   }

   render(dispatch) {
      console.log(this.props)
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
                                       {/* <img src={item.image_link} alt={item.name}/> */}
                                    </div>
                                    <div><strong>{item.brand}</strong></div>
                                    <div><strong>{item.name}</strong></div>
                                    <div>{item.price}</div>
                                    <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                                 </li>
                           )) : ''}
                        </ul>
                  </div>
                     {this.props.cartItems.length !== 0 && (
                  <div>
                        <div className='total'>
                           <div>
                              <strong>Total:{' '}</strong>
                              {formatCurrency(this.props.cartItems.reduce((total, item) => total + (item.price * item.count, 0)))}
                           </div>
                           <button className='button primary'>Proceed</button>
                        </div>
                  </div>
                     )}
          </div>  
      );
   }
}

const mapStateToProps = state => ({
   cartItems: state.cart.cartItems
});
export default connect(mapStateToProps)(Cart);
