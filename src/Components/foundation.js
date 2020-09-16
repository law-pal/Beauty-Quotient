import React from 'react';
import formatCurrency from './util';

const Foundation = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                                <img src={props.foundation.image_link}/>
                                <p><strong>{props.foundation.brand}</strong></p>
                                <p>{props.foundation.name}</p>
                            <div className='product-price'>
                                <div>{formatCurrency(props.foundation.price)}</div>
                                <button className='button-primary'>Add To Cart</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        );
        
}


export default Foundation;