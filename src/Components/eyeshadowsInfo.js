import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import { addToCart } from '../Actions/cartActions';

const EyeshadowsInfo = ({dispatch, items}) => {
const location = useLocation();
const id = location.pathname.split('/')[2];
const eyeshadows = items.filter(item => item.id.toString() === id )[0]

   return(
      <div className='info-parent'>
         <h1>{eyeshadows.name}</h1>
         <div className='info'>
               <div className='info-img'>
                  <img src={eyeshadows.image_link} alt='eyeshadow'/>
               </div>
               <ul className='info-ul'>
                  <li><strong>Brand:</strong>{eyeshadows.brand}</li>            
                  <li><strong>Price:</strong>{formatCurrency(eyeshadows.price)}</li>
                  <li><strong>Rating:{' '}</strong>{eyeshadows.rating}</li>
                  <li><strong>Category:{' '}</strong>{eyeshadows.category}</li>
                  <p><strong>Description:{' '}</strong>{eyeshadows.description}</p>
                  <button onClick={() => dispatch(addToCart(eyeshadows))}>Add to Bag</button>
               </ul>
         </div>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(EyeshadowsInfo);