 import React, {Component} from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
 import Blush from './images/Blush.jpg';
 import Bronzer from './images/Bronzer.jpg';
 //import Eyebrow from './images/Eyebrow.jpg';
// import Eyeliner from './images/Eyeliner.jpg';
import Eyeshadow from './images/Eyeshadow.jpg';
//import foundation from './images/foundation.jpg';
//import Lipliner from './images/Lipliner.jpg';
//import Lipstick from './images/Lipstick.jpg';
//import Mascara from './images/Mascara.jpg';
// import Nails from './images/Nails.jpg';


class Home extends Component {
    render(){
        return(
            <div className='home'>
                <div className='home-one'>
                    <img src={Bronzer} text='Hello' alt='#'/>
                    <h2>Welcome to</h2>
                </div>
                <div className='home-two'>
                    <img src={Blush} alt='#'/>
                    <h2>Beauty</h2>
                 </div>
                <div className='home-two'>
                    <img src={Eyeshadow} alt='#'/>
                   <h2>Quotient</h2>
                 </div>
            </div>
            
        );
    }
}

export default Home;