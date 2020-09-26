import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import { addToCart } from '../Actions/cartActions';

const MascarasInfo = ({dispatch, items}) => {
const location = useLocation();
const id = location.pathname.split('/')[2];
const mascaras = items.filter(item => item.id.toString() === id )[0]
  
   return(
      <div className='info-parent'>
         <h1>{mascaras.name}</h1>
         <div className='info'>
               <div className='info-img'>
                  <img src={mascaras.image_link} alt='mascara'/>
               </div>
               <ul className='info-ul'>
                  <li><strong>Brand:</strong>{mascaras.brand}</li>            
                  <li><strong>Price:</strong>{formatCurrency(mascaras.price)}</li>
                  <li><strong>Rating:{' '}</strong>{mascaras.rating}</li>
                  <li><strong>Category:{' '}</strong>{mascaras.category}</li>
                  <p><strong>Description:{' '}</strong>{mascaras.description}</p>
                  <button onClick={() => dispatch(addToCart(mascaras))}>Add to Bag</button>
               </ul>
         </div>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(MascarasInfo);