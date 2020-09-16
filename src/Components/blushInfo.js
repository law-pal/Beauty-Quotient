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
      <div className='info'>
            <h1>{blush.name}</h1>
            <ul>
               <img src={blush.image_link}/>
               <li><strong>Brand:</strong>{blush.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(blush.price)}</li>
               <li><strong>Rating:{' '}</strong>{blush.rating}</li>
               <li><strong>Category:{' '}</strong>{blush.category}</li>
               <button>Add to Cart</button>
               <p><strong>Description:{' '}</strong>{blush.description}</p>
            </ul>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(BlushInfo);