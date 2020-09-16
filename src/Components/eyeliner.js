import React from 'react';
import formatCurrency from './util';

const Eyeliner = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                                <img src={props.eyeliner.image_link}/>
                                <p><strong>{props.eyeliner.brand}</strong></p>
                                <p>{props.eyeliner.name}</p>
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