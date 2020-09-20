import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import { addToCart } from '../Actions/cartActions';

const EyebrowsInfo = ({dispatch, items}) => {
const location = useLocation();
const id = location.pathname.split('/')[2];
const eyebrows = items.filter(item => item.id.toString() === id )[0]
  console.log(eyebrows)
   return(
      <div className='info-parent'>
      <h1>{eyebrows.name}</h1>
      <div className='info'>
            <div className='info-img'>
               <img src={eyebrows.image_link}/>
            </div>
            <ul className='info-ul'>
               <li><strong>Brand:</strong>{eyebrows.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(eyebrows.price)}</li>
               <li><strong>Rating:{' '}</strong>{eyebrows.rating}</li>
               <li><strong>Category:{' '}</strong>{eyebrows.category}</li>
               <p><strong>Description:{' '}</strong>{eyebrows.description}</p>
               <button onClick={() => dispatch(addToCart(eyebrows))}>Add to Bag</button>
            </ul>
      </div>
   </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(EyebrowsInfo);