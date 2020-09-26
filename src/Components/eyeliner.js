import React from 'react';
import formatCurrency from './util';

const Eyeliner = (props) => {
       
    
        return(
            <div className='parent-container'>
            <div className='products'>
                <ul className='product'>
                        <img src={props.eyeliner.image_link} alt='eyeliner'/>
                        <li><h4>{props.eyeliner.brand}</h4></li>
                        <li>{props.eyeliner.name}</li>
                        <div className='btn-price'>
                        <div><li><strong>{formatCurrency(props.eyeliner.price)}</strong></li></div>
                        <div>{<i class="fas fa-heart"></i> }</div>
                        </div>
                 </ul>
            </div>
     </div>
        )
        
}


export default Eyeliner;