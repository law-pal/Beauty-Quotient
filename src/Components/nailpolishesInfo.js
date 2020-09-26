import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import { addToCart } from '../Actions/cartActions';

const NailpolishesInfo = ({dispatch, items}) => {
const location = useLocation();
const id = location.pathname.split('/')[2];
const nailpolishes = items.filter(item => item.id.toString() === id )[0]
  
   return(
      <div className='info-parent'>
      <h1>{nailpolishes.name}</h1>
      <div className='info'>
            <div className='info-img'>
               <img src={nailpolishes.image_link} alt='nail-polish'/>
            </div>
            <ul className='info-ul'>
               <li><strong>Brand:</strong>{nailpolishes.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(nailpolishes.price)}</li>
               <li><strong>Rating:{' '}</strong>{nailpolishes.rating}</li>
               <li><strong>Category:{' '}</strong>{nailpolishes.category}</li>
               <p><strong>Description:{' '}</strong>{nailpolishes.description}</p>
               <button onClick={() => dispatch(addToCart(nailpolishes))}>Add to Bag</button>
            </ul>
      </div>
   </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(NailpolishesInfo);