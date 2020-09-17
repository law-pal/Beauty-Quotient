import React from 'react';
import formatCurrency from './util';
import {addToCart} from '../Actions/cartActions'

const Blush = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                                <img src={props.blush.image_link}/>
                                <p><strong>{props.blush.brand}</strong></p>
                                <p>{props.blush.name}</p>

                            <div className='product-price'>
                                <div>{formatCurrency(props.blush.price)}</div>
                                <button className='button-primary'>SHOP NOW</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        )
        
}


export default Blush;