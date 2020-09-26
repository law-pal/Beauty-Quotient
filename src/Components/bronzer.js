import React from 'react';
import formatCurrency from './util';

const Bronzer = (props) => {
       
    return(
        <div className='parent-container'>
                    <div className='products'>
                        <ul className='product'>
                                <img src={props.bronzer.image_link} alt='bronzer'/>
                                <li><h4>{props.bronzer.brand}</h4></li>
                                <li>{props.bronzer.name}</li>
                                <div className='btn-price'>
                                <div><li><strong>{formatCurrency(props.bronzer.price)}</strong></li></div>
                                <div>{<i class="fas fa-heart"></i> }</div>
                                </div>
                         </ul>
                    </div>
             </div>
    )
        
}


export default Bronzer;