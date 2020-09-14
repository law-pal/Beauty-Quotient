import React from 'react';
import formatCurrency from './util';

const Bronzer = (props) => {
       
    return(
       <div className='parent-container'>
           <ul className='products'>
               <li>
                   <div className='product'>
                       <a href='#'>
                           <img src={props.bronzer.image_link}/>
                           <p>{props.bronzer.brand}</p>
                           <p>{props.bronzer.name}</p>
                           {/* remember to display color later */}
                           {/* {props.bronzer.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                       </a>
                       <div className='product-price'>
                           <div>{formatCurrency(props.bronzer.price)}</div>
                           <button className='button-primary'>Add to Cart</button>
                       </div>
                    </div>
               </li>
           </ul>
        </div>
    )
        
}


export default Bronzer;