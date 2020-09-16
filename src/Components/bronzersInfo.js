import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';

const BronzersInfo = (props) => {
console.log(props.items);
const location = useLocation();
const id = location.pathname.split('/')[2];
const bronzer = props.items.filter(item => item.id.toString() === id )[0]
  console.log(bronzer)
   return(
      <div className='info'>
            <h1>{bronzer.name}</h1>
            <ul>
               <img src={bronzer.image_link}/>
               <li><strong>Brand:</strong>{bronzer.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(bronzer.price)}</li>
               <li><strong>Rating:{' '}</strong>{bronzer.rating}</li>
               <li><strong>Category:{' '}</strong>{bronzer.category}</li>
               <button>Add to Cart</button>
               <p><strong>Description:{' '}</strong>{bronzer.description}</p>
            </ul>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(BronzersInfo);