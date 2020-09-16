import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';

const EyelinersInfo = (props) => {
console.log(props.items);
const location = useLocation();
const id = location.pathname.split('/')[2];
const eyeliners = props.items.filter(item => item.id.toString() === id )[0]
  console.log(eyeliners)
   return(
      <div className='info-parent'>
         <h1>{eyeliners.name}</h1>
         <div className='info'>
               <div className='info-img'>
                  <img src={eyeliners.image_link}/>
               </div>
               <ul className='info-ul'>
                  <li><strong>Brand:</strong>{eyeliners.brand}</li>            
                  <li><strong>Price:</strong>{formatCurrency(eyeliners.price)}</li>
                  <li><strong>Rating:{' '}</strong>{eyeliners.rating}</li>
                  <li><strong>Category:{' '}</strong>{eyeliners.category}</li>
                  <p><strong>Description:{' '}</strong>{eyeliners.description}</p>
                  <button>Add to Cart</button>
               </ul>
         </div>
      </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(EyelinersInfo);