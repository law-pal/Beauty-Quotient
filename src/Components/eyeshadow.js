import React from 'react';
import formatCurrency from './util';

const Eyeshadow = (props) => {
       
    
        return(
            <div className='parent-container'>
            <div className='products'>
                <ul className='product'>
                        <img src={props.eyeshadow.image_link} alt='eyeshadow'/>
                        <li><h4>{props.eyeshadow.brand}</h4></li>
                        <li>{props.eyeshadow.name}</li>
                        <div className='btn-price'>
                        <div><li><strong>{formatCurrency(props.eyeshadow.price)}</strong></li></div>
                        <div>{<i class="fas fa-heart"></i> }</div>
                        </div>
                 </ul>
            </div>
     </div>
        );
        
}


export default Eyeshadow;