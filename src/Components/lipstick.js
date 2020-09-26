import React from 'react';
import formatCurrency from './util';

const Lipstick = (props) => {
       
    
        return(
            <div className='parent-container'>
            <div className='products'>
                <ul className='product'>
                        <img src={props.lipstick.image_link} alt='lipstick'/>
                        <li><h4>{props.lipstick.brand}</h4></li>
                        <li>{props.lipstick.name}</li>
                        <div className='btn-price'>
                        <div><li><strong>{formatCurrency(props.lipstick.price)}</strong></li></div>
                        <div>{<i class="fas fa-heart"></i> }</div>
                        </div>
                 </ul>
            </div>
     </div>
        )
        
}


export default Lipstick;