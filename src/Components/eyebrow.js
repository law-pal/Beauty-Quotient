import React from 'react';
import formatCurrency from './util';

const Eyebrow = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                                <img src={props.eyebrow.image_link}/>
                                <p><strong>{props.eyebrow.brand}</strong></p>
                                <p>{props.eyebrow.name}</p>
                            <div className='product-price'>
                                <div>{formatCurrency(props.eyebrow.price)}</div>
                                <button className='button-primary'>SHOP NOW</button>
                            </div>
                         </div>
                    </li>
                </ul>
             </div>
        )
        
}


export default Eyebrow;