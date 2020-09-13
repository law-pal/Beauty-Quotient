import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import Blushes from './blushes';
import Bronzers from './bronzers';
import Eyebrows from './eyebrows';
import Eyeliners from './eyeliners';

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
                    </ul>
                </nav>
                <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/bronzers' component={Bronzers}/>
                <Route path='/blushes' component={Blushes}/>
                <Route path='/eyebrows' component={Eyebrows}/> 
                <Route path='/eyeliners' component={Eyeliners}/>                
                </Switch>
            </Router>
        );
    }
}




export default Navigation;