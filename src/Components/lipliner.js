import React from 'react';
import formatCurrency from './util';

const Lipliner = (props) => {
       
    
        return(
            <div className='parent-container'>
            <div className='products'>
                <ul className='product'>
                        <img src={props.lipliner.image_link}/>
                        <li><h4>{props.lipliner.brand}</h4></li>
                        <li>{props.lipliner.name}</li>
                        <div className='btn-price'>
                        <div><li><strong>{formatCurrency(props.lipliner.price)}</strong></li></div>
                        <div>{<i class="fas fa-heart"></i> }</div>
                        </div>
                 </ul>
            </div>
     </div>
        )
        
}


export default Lipliner;