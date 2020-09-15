import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import Blushes from './blushes';
import Bronzers from './bronzers';
import Eyebrows from './eyebrows';
import Eyeliners from './eyeliners';
import Eyeshadows from './eyeshadows';
import Foundations from './foundations';
import Lipliners from './lipliners';
import Lipsticks from './lipsticks';
import Mascaras from './mascaras';
import Nailpolishes from './nailpolishes';
import Blush from './images/Blush.jpg';
import Bronzer from './images/Bronzer.jpg';
import Eyebrow from './images/Eyebrow.jpg';
import Eyeliner from './images/Eyeliner.jpg';
import Eyeshadow from './images/Eyeshadow.jpg';
import foundation from './images/foundation.jpg';
import Lipliner from './images/Lipliner.jpg';
import Lipstick from './images/Lipstick.jpg';
import Mascara from './images/Mascara.jpg';
import Nails from './images/Nails.jpg';

class Navigation extends Component {
    render(){
        return(
           <div >
               <Router>
                    <div className='home-container'>
                            <Link to='/'><div><img src={Blush}/></div></Link>
                            <Link to='/bronzers'><div><img alt='#' src={Bronzer}/></div></Link>
                            <Link to='/blushes'> <div><img alt='#' src={Eyebrow}/></div></Link>
                            <Link to='/eyebrows'><div><img alt='#' src={Eyeliner}/></div></Link>
                            <Link to='/eyeliners'><div><img alt='#' src={Eyeshadow}/></div></Link>
                            <Link to='/eyeshadows'> <div><img alt='#' src={foundation}/></div></Link>
                            <Link to='/foundations'> <div><img alt='#' src={Lipliner}/></div></Link>
                            <Link to='/lipliners'> <div><img alt='#' src={Lipstick}/></div></Link>
                            <Link to='/lipsticks'> <div><img alt='#' src={Mascara}/></div></Link>
                            <Link to='/nailpolishes'> <div><img alt='#' src={Nails}/></div></Link>
                    </div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/bronzers' component={Bronzers}/>
                    <Route path='/blushes' component={Blushes}/>
                    <Route path='/eyebrows' component={Eyebrows}/> 
                    <Route path='/eyeliners' component={Eyeliners}/>
                    <Route path='/eyeshadows' component={Eyeshadows}/> 
                    <Route path='/foundations' component={Foundations}/>     
                    <Route path='/lipliners' component={Lipliners}/> 
                    <Route path='/lipsticks' component={Lipsticks}/>   
                    <Route path='/mascaras' component={Mascaras}/> 
                    <Route path='/nailpolishes' component={Nailpolishes}/> 
                </Switch>      
               </Router>
           </div>
        );
    }
}

export default Navigation;