import React, {Component} from 'react';
import Blushes from './images/Blush.jpg'
import Bronzer from './images/Bronzer.jpg'
import Eyebrows from './images/Eyebrow.jpg'
import Eyeliners from './images/Eyeliner.jpg'
import Eyeshadows from './images/Eyeshadow.jpg'
import foundation from './images/foundation.jpg'
import Lipliner from './images/Lipliner.jpg'
import Lipstick from './images/Lipstick.jpg'
import Mascara from './images/Mascara.jpg'
import Nails from './images/Nails.jpg'

class Home extends Component {
    render(){
        return(
           <div >
               <div className='home-container'>
                    <div><img alt='#' src={Blushes}/></div>
                    <div><img alt='#' src={Bronzer}/></div>
                    <div><img alt='#' src={Eyebrows}/></div>
                    <div><img alt='#' src={Eyeliners}/></div>
                    <div><img alt='#' src={Eyeshadows}/></div>
                    <div><img alt='#' src={foundation}/></div>
                    <div><img alt='#' src={Lipliner}/></div>
                    <div><img alt='#' src={Lipstick}/></div>
                    <div><img alt='#' src={Mascara}/></div>
                    <div><img alt='#' src={Nails}/></div>
               </div>
           </div>
        );
    }
}

export default Home;