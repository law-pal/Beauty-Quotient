import React from 'react';
import formatCurrency from './util';

const Foundation = (props) => {
       
    
        return(
            <div className='parent-container'>
            <div className='products'>
                <ul className='product'>
                        <img src={props.foundation.image_link} alt='foundation'/>
                        <li><h4>{props.foundation.brand}</h4></li>
                        <li>{props.foundation.name}</li>
                        <div className='btn-price'>
                        <div><li><strong>{formatCurrency(props.foundation.price)}</strong></li></div>
                        <div>{<i class="fas fa-heart"></i> }</div>
                        </div>
                 </ul>
            </div>
     </div>
        );
        
}


export default Foundation;