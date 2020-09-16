import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';


const LiplinersInfo = (props) => {
console.log(props.items);
const location = useLocation();
const id = location.pathname.split('/')[2];
const lipliners = props.items.filter(item => item.id.toString() === id )[0]
  console.log(lipliners)
   return(
      <div className='info'>
            <h1>{lipliners.name}</h1>
            <ul>
               <img src={lipliners.image_link}/>
               <li><strong>Brand:</strong>{lipliners.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(lipliners.price)}</li>
               <li><strong>Rating:{' '}</strong>{lipliners.rating}</li>
               <li><strong>Category:{' '}</strong>{lipliners.category}</li>
               <button>Add to Cart</button>
               <p><strong>Description:{' '}</strong>{lipliners.description}</p>
            </ul>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(LiplinersInfo);