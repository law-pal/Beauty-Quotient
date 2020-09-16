import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';


const LipsticksInfo = (props) => {
console.log(props.items);
const location = useLocation();
const id = location.pathname.split('/')[2];
const lipsticks = props.items.filter(item => item.id.toString() === id )[0]
  console.log(lipsticks)
   return(
      <div className='info'>
            <h1>{lipsticks.name}</h1>
            <ul>
               <img src={lipsticks.image_link}/>
               <li><strong>Brand:</strong>{lipsticks.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(lipsticks.price)}</li>
               <li><strong>Rating:{' '}</strong>{lipsticks.rating}</li>
               <li><strong>Category:{' '}</strong>{lipsticks.category}</li>
               <button>Add to Cart</button>
               <p><strong>Description:{' '}</strong>{lipsticks.description}</p>
            </ul>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(LipsticksInfo);