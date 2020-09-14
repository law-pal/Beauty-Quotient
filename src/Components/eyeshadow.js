import React from 'react';
import formatCurrency from './util';

const Eyeshadow = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                            <a href={'#' + props.eyeshadow.name}>
                                <img src={props.eyeshadow.image_link}/>
                                <p>{props.eyeshadow.brand}</p>
                                <p>{props.eyeshadow.name}</p>
                                {/* remember to display color later */}
                                {/* {props.eyeshadow.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                            </a>
                            <div className='product-price'>
                                <div>{formatCurrency(props.eyeshadow.price)}</div>
                                <button className='button-primary'>Add To Cart</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        );
        
}


export default Eyeshadow;