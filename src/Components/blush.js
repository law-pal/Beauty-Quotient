import React from 'react';
import formatCurrency from './util';
import Blushe from './images/Blush.jpg'

const Blush = (props) => {
       
    
        return(
                <div className='parent-container'>
                    <div className='products'>
                        <ul className='product'>
                                <img src={props.blush.image_link}/>
                                <li><h4>{props.blush.brand}</h4></li>
                                <li>{props.blush.name}</li>
                                <li><strong>{formatCurrency(props.blush.price)}</strong></li>
                                {/* <button className='button-primary'>SHOP NOW</button> */}
                         </ul>
                    </div>
             </div>
        )
        
}


export default Blush;