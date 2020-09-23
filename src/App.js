import React, {Component} from 'react'
import './App.css';
import './Components/Navigation.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home'
import Blushes from './Components/blushes'
import Bronzers from './Components/bronzers'
import Eyebrows from './Components/eyebrows';
import Eyeliners from './Components/eyeliners';
import Eyeshadows from './Components/eyeshadows';
import Foundations from './Components/foundations';
import Lipliners from './Components/lipliners';
import Lipsticks from './Components/lipsticks';
import Mascaras from './Components/mascaras';
import Nailpolishes from './Components/nailpolishes';
import BlushInfo from './Components/blushInfo';
import BronzersInfo from './Components/bronzersInfo';
import EyebrowsInfo from './Components/eyebrowsInfo';
import EyelinersInfo from './Components/EyelinersInfo';
import EyeshadowsInfo from './Components/eyeshadowsInfo';
import FoundationsInfo from './Components/foundationsInfo';
import LiplinersInfo from './Components/liplinersInfo';
import LipsticksInfo from './Components/lipsticksInfo';
import MascarasInfo from './Components/mascarasInfo';
import NailpolishesInfo from './Components/nailpolishesInfo';
import Cart from './Components/Cart';
import SignUp from './Components/SignUp';
import ContactUs from './Components/ContactUs';



 class App extends Component {
  render() {
    return (
      <Router>
        <div className='grid-container'>
          <header className='header'>
            <Navigation/>
          </header>
          <main className='main'>
          <Switch>
            <Route exact path='/Cart' component={Cart}/>
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
            <Route path='/lipsticks/' component={LipsticksInfo}/>
            <Route exact path='/mascaras' component={Mascaras}/>   
            <Route path='/mascaras/' component={MascarasInfo}/>
            <Route exact path='/nailpolishes' component={Nailpolishes}/> 
            <Route path='/nailpolishes/' component={NailpolishesInfo}/> 
            <Route path='/SignUp/' component={SignUp}/>  
            <Route path='/ContactUs/' component={ContactUs}/>                  
        </Switch>
          </main>
          <footer className='footer'>All Rights Reserved</footer>
        </div>
      </Router>

    )
  }
}

export default App;



















































