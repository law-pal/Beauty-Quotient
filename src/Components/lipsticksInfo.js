import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {addToCart} from '../Actions/cartActions'

const LipsticksInfo = ({dispatch, items}) => {
const location = useLocation();
const id = location.pathname.split('/')[2];
const lipsticks = items.filter(item => item.id.toString() === id )[0]
  
   return(
      <div className='info-parent'>
         <h1>{lipsticks.name}</h1>
         <div className='info'>
               <div className='info-img'>
                  <img src={lipsticks.image_link} alt='lipstick'/>
               </div>
               <ul className='info-ul'>
                  <li><strong>Brand:</strong>{lipsticks.brand}</li>            
                  <li><strong>Price:</strong>{formatCurrency(lipsticks.price)}</li>
                  <li><strong>Rating:{' '}</strong>{lipsticks.rating}</li>
                  <li><strong>Category:{' '}</strong>{lipsticks.category}</li>
                  <p><strong>Description:{' '}</strong>{lipsticks.description}</p>
                  <button onClick={() => dispatch(addToCart(lipsticks))}>Add to Bag</button>
               </ul>
         </div>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(LipsticksInfo);