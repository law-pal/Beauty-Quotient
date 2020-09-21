 import React, {Component} from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
 import Blush from './images/Blush.jpg';
// import Bronzer from './images/Bronzer.jpg';
 //import Eyebrow from './images/Eyebrow.jpg';
// import Eyeliner from './images/Eyeliner.jpg';
import Eyeshadow from './images/Eyeshadow.jpg';
//import foundation from './images/foundation.jpg';
import Lipliner from './images/Lipliner.jpg';
//import Lipstick from './images/Lipstick.jpg';
//import Mascara from './images/Mascara.jpg';
// import Nails from './images/Nails.jpg';


class Home extends Component {
    render(){
        return(
            <div className='home'>
                {/* <div><img src={Mascara}/></div>
                <div><img src={Blush}/></div>
                <div><img src={Eyeshadow}/></div> */}
                                    
               
                <div className='context-wrapper'>
                    <img src={Lipliner} text='Hello'/>
                    <div className='text-wrapper'>
                        <h2>Welcome to</h2>
                    </div>
                </div>
                <div className='home-two'>
                    <img src={Blush}/>
                    <h2><span>Beauty</span></h2>
                 </div>
                <div className='home-two'>
                    <img src={Eyeshadow}/>
                   <h2> <span>Quotient</span></h2>
                 </div>
            </div>
            
        );
    }
}

export default Home;