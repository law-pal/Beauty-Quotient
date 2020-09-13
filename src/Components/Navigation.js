import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import Blushes from './blushes';
import Bronzers from './bronzers';

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
                    </ul>
                </nav>
                <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/bronzers' component={Bronzers}/>
                <Route path='/blushes' component={Blushes}/>
                </Switch>
            </Router>
        );
    }
}




export default Navigation;