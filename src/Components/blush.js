import React from 'react';
import { Link } from 'react-router-dom';
import BlushInfo from './blushInfo';
import formatCurrency from './util';

const Blush = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                            <div>
                                <img src={props.blush.image_link}/>
                                <p><strong>{props.blush.brand}</strong></p>
                                <p>{props.blush.name}</p>
                                {/* remember to display color later */}
                                {/* {props.blush.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                            </div>
                            <div className='product-price'>
                                <div>{formatCurrency(props.blush.price)}</div>
                                <button className='button-primary'>Add To Cart</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        )
        
}


export default Blush;