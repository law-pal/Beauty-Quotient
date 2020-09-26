import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import { addToCart } from '../Actions/cartActions';

const BlushInfo = ({dispatch, items}) => {
const location = useLocation();
const id = location.pathname.split('/')[2];
console.log(items)
const blush = items.filter(item => item.id.toString() === id )[0]

   return(
      <div className='info-parent'>
         <h1>{blush.name}</h1>
         <div className='info'>
               <div className='info-img'>
                  <img src={blush.image_link} alt='blush'/>
               </div>
               <ul className='info-ul'>
                  <li><strong>Brand:</strong>{blush.brand}</li>            
                  <li><strong>Price:</strong>{formatCurrency(blush.price)}</li>
                  <li><strong>Rating:{' '}</strong>{blush.rating}</li>
                  <li><strong>Category:{' '}</strong>{blush.category}</li>
                  <p><strong>Description:{' '}</strong>{blush.description}</p>
                  <button onClick={() => dispatch(addToCart(blush))}>Add to Bag</button>
               </ul>
         </div>
      </div>
   );
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(BlushInfo);