import React from 'react';
import formatCurrency from './util';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';


const NailpolishesInfo = (props) => {
console.log(props.items);
const location = useLocation();
const id = location.pathname.split('/')[2];
const nailpolishes = props.items.filter(item => item.id.toString() === id )[0]
  console.log(nailpolishes)
   return(
      <div className='info-parent'>
      <h1>{nailpolishes.name}</h1>
      <div className='info'>
            <div className='info-img'>
               <img src={nailpolishes.image_link}/>
            </div>
            <ul className='info-ul'>
               <li><strong>Brand:</strong>{nailpolishes.brand}</li>            
               <li><strong>Price:</strong>{formatCurrency(nailpolishes.price)}</li>
               <li><strong>Rating:{' '}</strong>{nailpolishes.rating}</li>
               <li><strong>Category:{' '}</strong>{nailpolishes.category}</li>
               <p><strong>Description:{' '}</strong>{nailpolishes.description}</p>
               <button>Add to Cart</button>
            </ul>
      </div>
   </div>
   )
}


const mapStateToProps = state => ({
   items: state.items.items
})
export default connect(mapStateToProps)(NailpolishesInfo);