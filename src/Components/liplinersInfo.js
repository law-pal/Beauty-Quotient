import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import { addToCart } from '../Actions/cartActions';

const LiplinersInfo = ({dispatch, items}) => {
const location = useLocation();
const id = location.pathname.split('/')[2];
const lipliners = items.filter(item => item.id.toString() === id )[0]

   return(
      <div className='info-parent'>
      <h1>{lipliners.name}</h1>
      <div className='info'>
            <div className='info-img'>
               <img src={lipliners.image_link}/>
            </div>
            <ul className='info-ul'>
               <li><strong>Brand:</strong>{lipliners.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(lipliners.price)}</li>
               <li><strong>Rating:{' '}</strong>{lipliners.rating}</li>
               <li><strong>Category:{' '}</strong>{lipliners.category}</li>
               <p><strong>Description:{' '}</strong>{lipliners.description}</p>
               <button onClick={() => dispatch(addToCart(lipliners))}>Add to Bag</button>
            </ul>
      </div>
   </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(LiplinersInfo);