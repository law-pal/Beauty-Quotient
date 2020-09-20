import React from 'react';
import formatCurrency from './util';

const Blush = (props) => {
       
    
        return(
                <div className='parent-container'>
                    <div className='products'>
                        <ul className='product'>
                                <img src={props.blush.image_link}/>
                                <li><h4>{props.blush.brand}</h4></li>
                                <li>{props.blush.name}</li>
                                <div className='btn-price'>
                                <div><li><strong>{formatCurrency(props.blush.price)}</strong></li></div>
                                <div>{<i class="fas fa-heart"></i> }</div>
                                </div>
                         </ul>
                    </div>
             </div>
        )
        
}


export default Blush;