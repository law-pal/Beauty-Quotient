import React from 'react';
import formatCurrency from './util';

const Eyeshadow = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                                <img src={props.eyeshadow.image_link}/>
                                <p><strong>{props.eyeshadow.brand}</strong></p>
                                <p>{props.eyeshadow.name}</p>
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