import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Blushes from './blushes';
import Items from './Items';

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
                        <Link className='navbar-link' to='/Blushes'>Blushes</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                <Route exact path='/' component={Items}/>
                <Route path='/blushes' component={Blushes}/>
                </Switch>
            </Router>
        );
    }
}




export default Navigation;