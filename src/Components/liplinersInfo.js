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
               <button>Add to Cart</button>
            </ul>
      </div>
   </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(LiplinersInfo);