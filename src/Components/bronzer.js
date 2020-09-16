import React from 'react';
import formatCurrency from './util';

const Bronzer = (props) => {
       
    return(
       <div className='parent-container'>
           <ul className='products'>
               <li>
                   <div className='product'>
                           <img src={props.bronzer.image_link}/>
                           <p><strong>{props.bronzer.brand}</strong></p>
                           <p>{props.bronzer.name}</p>
                           {/* remember to display color later */}
                           {/* {props.bronzer.product_colors.map((color, hex_value) => <p key={hex_value} colors={color}/>)} */}
                       <div className='product-price'>
                           <div>{formatCurrency(props.bronzer.price)}</div>
                           <button className='button-primary'>SHOP NOW</button>
                       </div>
                    </div>
               </li>
           </ul>
        </div>
    )
        
}


export default Bronzer;