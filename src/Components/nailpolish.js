import React from 'react';
import formatCurrency from './util';

const Nailpolish = (props) => {
       
    
        return(
            <div className='parent-container'>
            <div className='products'>
                <ul className='product'>
                        <img src={props.nailpolish.image_link} alt='nail-polish'/>
                        <li><h4>{props.nailpolish.brand}</h4></li>
                        <li>{props.nailpolish.name}</li>
                        <div className='btn-price'>
                        <div><li><strong>{formatCurrency(props.nailpolish.price)}</strong></li></div>
                        <div>{<i class="fas fa-heart"></i> }</div>
                        </div>
                 </ul>
            </div>
     </div>
        )
        
}


export default Nailpolish;