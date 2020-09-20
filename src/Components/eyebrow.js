import React from 'react';
import formatCurrency from './util';

const Eyebrow = (props) => {
       
    
        return(
            <div className='parent-container'>
            <div className='products'>
                <ul className='product'>
                        <img src={props.eyebrow.image_link}/>
                        <li><h4>{props.eyebrow.brand}</h4></li>
                        <li>{props.eyebrow.name}</li>
                        <div className='btn-price'>
                        <div><li><strong>{formatCurrency(props.eyebrow.price)}</strong></li></div>
                        <div>{<i class="fas fa-heart"></i> }</div>
                        </div>
                 </ul>
            </div>
     </div>
        )
        
}


export default Eyebrow;