import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';


const FoundationsInfo = (props) => {
console.log(props.items);
const location = useLocation();
const id = location.pathname.split('/')[2];
const foundations = props.items.filter(item => item.id.toString() === id )[0]
  console.log(foundations)
   return(
      <div className='info-parent'>
      <h1>{foundations.name}</h1>
      <div className='info'>
            <div className='info-img'>
               <img src={foundations.image_link}/>
            </div>
            <ul className='info-ul'>
               <li><strong>Brand:</strong>{foundations.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(foundations.price)}</li>
               <li><strong>Rating:{' '}</strong>{foundations.rating}</li>
               <li><strong>Category:{' '}</strong>{foundations.category}</li>
               <p><strong>Description:{' '}</strong>{foundations.description}</p>
               <button>Add to Cart</button>
            </ul>
      </div>
   </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(FoundationsInfo);