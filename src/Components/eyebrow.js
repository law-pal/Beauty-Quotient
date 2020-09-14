import React from 'react';
import formatCurrency from './util';

const Eyebrow = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                            <a href={'#' + props.eyebrow.name}>
                                <img src={props.eyebrow.image_link}/>
                                <p>{props.eyebrow.brand}</p>
                                <p>{props.eyebrow.name}</p>
                                {/* remember to display color later */}
                                {/* {props.eyebrow.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                            </a>
                            <div className='product-price'>
                                <div>{formatCurrency(props.eyebrow.price)}</div>
                                <button className='button-primary'>Add To Cart</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        )
        
}


export default Eyebrow;