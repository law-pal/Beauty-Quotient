import React from 'react';
import formatCurrency from './util';

const Nailpolish = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                                <img src={props.nailpolish.image_link}/>
                                <p><strong>{props.nailpolish.brand}</strong></p>
                                <p>{props.nailpolish.name}</p>
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