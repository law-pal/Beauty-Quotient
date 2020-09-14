import React from 'react';
import formatCurrency from './util';

const Nailpolish = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                            <a href={'#' + props.nailpolish.name}>
                                <img src={props.nailpolish.image_link}/>
                                <p>{props.nailpolish.brand}</p>
                                <p>{props.nailpolish.name}</p>
                                {/* remember to display color later */}
                                {/* {props.nailpolish.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                            </a>
                            <div className='product-price'>
                                <div>{formatCurrency(props.nailpolish.price)}</div>
                                <button className='button-primary'>Add To Cart</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        )
        
}


export default Nailpolish;