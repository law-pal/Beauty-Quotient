import React from 'react';
import formatCurrency from './util';

const Mascara = (props) => {
       
    
        return(

            <div className='parent-container'>
                < div className='products'>
                    <ul className='product'>
                            <img src={props.mascara.image_link}/>
                            <li><h4>{props.mascara.brand}</h4></li>
                            <li>{props.mascara.name}</li>
                            <div className='btn-price'>
                            <div><li><strong>{formatCurrency(props.mascara.price)}</strong></li></div>
                            <div>{<i class="fas fa-heart"></i> }</div>
                            </div>
                    </ul>
                </div>
            </div>
        );
        
        
}


export default Mascara;