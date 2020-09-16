import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';

const BlushInfo = (props) => {
console.log(props.items);
const location = useLocation();
const id = location.pathname.split('/')[2];
const blush = props.items.filter(item => item.id.toString() === id )[0]
  console.log(blush)
   return(
      <div className='info-parent'>
         <h1>{blush.name}</h1>
         <div className='info'>
               <div className='info-img'>
                  <img src={blush.image_link}/>
               </div>
               <ul className='info-ul'>
                  <li><strong>Brand:</strong>{blush.brand}</li>            
                  <li><strong>Price:</strong>{formatCurrency(blush.price)}</li>
                  <li><strong>Rating:{' '}</strong>{blush.rating}</li>
                  <li><strong>Category:{' '}</strong>{blush.category}</li>
                  <p><strong>Description:{' '}</strong>{blush.description}</p>
                  <button>Add to Cart</button>
               </ul>
         </div>
      </div>
   );
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(BlushInfo);