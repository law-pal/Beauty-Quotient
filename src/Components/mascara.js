import React from 'react';
import formatCurrency from './util';

const Mascara = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                            <a href={'#' + props.mascara.name}>
                                <img src={props.mascara.image_link}/>
                                <p><strong>{props.mascara.brand}</strong></p>
                                <p>{props.mascara.name}</p>
                                {/* remember to display color later */}
                                {/* {props.mascara.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                            </a>
                            <div className='product-price'>
                                <div>{formatCurrency(props.mascara.price)}</div>
                                <button className='button-primary'>Add To Cart</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        );
        
}


export default Mascara;