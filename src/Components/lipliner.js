import React from 'react';
import formatCurrency from './util';

const Lipliner = (props) => {
       
    
        return(
                <div className='parent-container'>
                <ul className='products'>
                    <li>
                        <div className='product'>
                                <img src={props.lipliner.image_link}/>
                                <p><strong>{props.lipliner.brand}</strong></p>
                                <p>{props.lipliner.name}</p>
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