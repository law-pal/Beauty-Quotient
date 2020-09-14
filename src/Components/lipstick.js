import React from 'react';
import formatCurrency from './util';

const Lipstick = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                            <a href={'#' + props.lipstick.name}>
                                <img src={props.lipstick.image_link}/>
                                <p>{props.lipstick.brand}</p>
                                <p>{props.lipstick.name}</p>
                                {/* remember to display color later */}
                                {/* {props.lipstick.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                            </a>
                            <div className='product-price'>
                                <div>{formatCurrency(props.lipstick.price)}</div>
                                <button className='button-primary'>Add To Cart</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        )
        
}


export default Lipstick;