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

class Navigation extends Component {
    render(){
        return(
            <Router>
                <nav>
                    <div className='navbar'>
                        <div>
                        <Link className='navbar-link' to='/'></Link>
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
        );
    }
}




export default Navigation;