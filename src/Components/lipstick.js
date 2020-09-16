import React from 'react';
import formatCurrency from './util';

const Lipstick = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                                <img src={props.lipstick.image_link}/>
                                <p><strong>{props.lipstick.brand}</strong></p>
                                <p>{props.lipstick.name}</p>
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