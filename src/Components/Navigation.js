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
                    <ul>
                        <li>
                        <Link className='navbar-link' to='/'>Home</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/bronzers'>Bronzers</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/blushes'>Blushes</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/eyebrows'>Eyebrows</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/eyeliners'>Eyeliners</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/eyeshadows'>Eyeshadows</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/foundations'>Foundations</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/lipliners'>Lipliners</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/lipsticks'>Lipsticks</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/mascaras'>Mascaras</Link>
                        </li>
                        <li>
                        <Link className='navbar-link' to='/nailpolishes'>Nail polish</Link>
                        </li>
                    </ul>
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