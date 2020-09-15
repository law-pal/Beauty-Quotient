import React, {Component} from 'react';
import Blushes from './images/Blushes.jpg'
import Bronzer from './images/Bronzer.jpg'
import Eyebrows from './images/Eyebrows.jpg'
import Eyeliners from './images/Eyeliners.jpg'
import Eyeshadows from './images/Eyeshadows.jpg'
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
                    <div><img src={Blushes}/></div>
                    <div><img src={Bronzer}/></div>
                    <div><img src={Eyebrows}/></div>
                    <div><img src={Eyeliners}/></div>
                    <div><img src={Eyeshadows}/></div>
                    <div><img src={foundation}/></div>
                    <div><img src={Lipliner}/></div>
                    <div><img src={Lipstick}/></div>
                    <div><img src={Mascara}/></div>
                    <div><img src={Nails}/></div>
               </div>
           </div>
        );
    }
}

export default Home;