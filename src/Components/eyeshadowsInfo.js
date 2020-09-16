import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';


const EyeshadowsInfo = (props) => {
console.log(props.items);
const location = useLocation();
const id = location.pathname.split('/')[2];
const eyeshadows = props.items.filter(item => item.id.toString() === id )[0]
  console.log(eyeshadows)
   return(
      <div className='info'>
            <h1>{eyeshadows.name}</h1>
            <ul>
               <img src={eyeshadows.image_link}/>
               <li><strong>Brand:</strong>{eyeshadows.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(eyeshadows.price)}</li>
               <li><strong>Rating:{' '}</strong>{eyeshadows.rating}</li>
               <li><strong>Category:{' '}</strong>{eyeshadows.category}</li>
               <button>Add to Cart</button>
               <p><strong>Description:{' '}</strong>{eyeshadows.description}</p>
            </ul>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(EyeshadowsInfo);