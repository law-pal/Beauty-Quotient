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
import BlushInfo from './blushInfo';
import BronzersInfo from './bronzersInfo';
import EyebrowsInfo from './eyebrowsInfo';
import EyelinersInfo from './EyelinersInfo';
import EyeshadowsInfo from './eyeshadowsInfo';
import FoundationsInfo from './foundationsInfo';
import LiplinersInfo from './liplinersInfo';








class Navigation extends Component {
    render(){
        return(
            <Router>
                <nav>
                    <div className='navbar'>
                        <div>
                        <Link className='navbar-link' to='/'>Home</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/bronzers'>Bronzers</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/blushes'>Blushes</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/eyebrows'>Eyebrows</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/eyeliners'>Eyeliners</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/eyeshadows'>Eyeshadows</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/foundations'>Foundations</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/lipliners'>Lipliners</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/lipsticks'>Lipsticks</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/mascaras'>Mascaras</Link>
                        </div>
                        <div>
                        <Link className='navbar-link' to='/nailpolishes'>Nail polish</Link>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/bronzers' component={Bronzers}/>
                    <Route path='/bronzers/' component={BronzersInfo}/>
                    <Route exact path='/blushes' component={Blushes}/>
                    <Route path='/blushes/' component={BlushInfo}/>
                    <Route exact path='/eyebrows' component={Eyebrows}/>
                    <Route path='/eyebrows/' component={EyebrowsInfo}/>
                    <Route exact path='/eyeliners' component={Eyeliners}/> 
                    <Route path='/eyeliners/' component={EyelinersInfo}/>
                    <Route exact path='/eyeshadows' component={Eyeshadows}/>
                    <Route path='/eyeshadows/' component={EyeshadowsInfo}/>
                    <Route exact path='/foundations' component={Foundations}/> 
                    <Route path='/foundations/' component={FoundationsInfo}/>
                    <Route exact path='/lipliners' component={Lipliners}/>     
                    <Route path='/lipliners/' component={LiplinersInfo}/>
                    <Route exact path='/lipsticks' component={Lipsticks}/> 
                    {/* <Route path='/lipsticks/' component={LipsticksInfo}/> */}
                    <Route exact path='/mascaras' component={Mascaras}/>   
                    {/* <Route path='/mascaras/' component={MascarasInfo}/> */}
                    <Route exact path='/nailpolishes' component={Nailpolishes}/> 
                    {/* <Route path='/nailpolishes/' component={NailpolishesInfo}/>                   */}
                </Switch>
            </Router>
        );
    }
}




export default Navigation;