import React from 'react';
import formatCurrency from './util';

const Lipliner = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                            <a href={'#' + props.lipliner.name}>
                                <img src={props.lipliner.image_link}/>
                                <p><strong>{props.lipliner.brand}</strong></p>
                                <p>{props.lipliner.name}</p>
                                {/* remember to display color later */}
                                {/* {props.lipliner.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                            </a>
                            <div className='product-price'>
                                <div>{formatCurrency(props.lipliner.price)}</div>
                                <button className='button-primary'>Add To Cart</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        )
        
}


export default Lipliner;