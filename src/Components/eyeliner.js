import React from 'react';
import formatCurrency from './util';

const Eyeliner = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                            <a href={'#' + props.eyeliner.name}>
                                <img src={props.eyeliner.image_link}/>
                                <p><strong>{props.eyeliner.brand}</strong></p>
                                <p>{props.eyeliner.name}</p>
                                {/* remember to display color later */}
                                {/* {props.eyeliner.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                            </a>
                            <div className='product-price'>
                                <div>{formatCurrency(props.eyeliner.price)}</div>
                                <button className='button-primary'>Add To Cart</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        )
        
}


export default Eyeliner;