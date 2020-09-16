import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';


const MascarasInfo = (props) => {
console.log(props.items);
const location = useLocation();
const id = location.pathname.split('/')[2];
const mascaras = props.items.filter(item => item.id.toString() === id )[0]
  console.log(mascaras)
   return(
      <div className='info'>
            <h1>{mascaras.name}</h1>
            <ul>
               <img src={mascaras.image_link}/>
               <li><strong>Brand:</strong>{mascaras.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(mascaras.price)}</li>
               <li><strong>Rating:{' '}</strong>{mascaras.rating}</li>
               <li><strong>Category:{' '}</strong>{mascaras.category}</li>
               <button>Add to Cart</button>
               <p><strong>Description:{' '}</strong>{mascaras.description}</p>
            </ul>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(MascarasInfo);