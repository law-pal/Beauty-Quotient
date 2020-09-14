import React from 'react';
import formatCurrency from './util';

const Foundation = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                            <a href={'#' + props.foundation.name}>
                                <img src={props.foundation.image_link}/>
                                <p>{props.foundation.brand}</p>
                                <p>{props.foundation.name}</p>
                                {/* remember to display color later */}
                                {/* {props.foundation.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                            </a>
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