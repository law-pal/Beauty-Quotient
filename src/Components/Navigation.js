 import React from 'react';
 import {Link} from 'react-router-dom';
 import {useState} from 'react';
 
 const Navigation = () => {

      const [click, setClick] = useState(false)
      const handleClick = () => setClick(!click)
      const closeMobileMenu = () => setClick(false)

    return( 
         <nav className='nav'>
            <Link>
               <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
               </div>
            </Link>
            <Link className='navbar-link' to='/' onClick={closeMobileMenu}>
               <h3>Home</h3>
            </Link>
            <Link>
               <h3>Eyes<i className='fas fa-caret-down'/></h3>
               <ul  className={click ? 'nav-menu active' : 'nav menu'}>
               <li><Link className='navbar-link' to='/eyebrows'>Eyebrows</Link></li>
               <li><Link className='navbar-link' to='/eyeliners'>Eyeliners</Link></li>
               <li><Link className='navbar-link' to='/eyeshadows'>Eyeshadows</Link></li>
               </ul>
            </Link>
            <Link>
               <ul className={click ? 'nav-menu active' : 'nav menu'}>
               <li><Link className='navbar-link' to='/foundations'>Foundations</Link></li>
               <li><Link className='navbar-link' to='/bronzers'>Bronzers</Link></li>
               <li><Link className='navbar-link' to='/blushes'>Blushes</Link></li>
               <li><Link className='navbar-link' to='/mascaras'>Mascaras</Link></li>
               </ul>
            </Link>
            <Link>
               <ul className={click ? 'nav-menu active' : 'nav menu'}>
               <li><Link className='navbar-link' to='/lipliners'>Lipliners</Link></li>
               <li><Link className='navbar-link' to='/lipsticks'>Lipsticks</Link></li>
               </ul>
            </Link>
            <Link>
               <ul className={click ? 'nav-menu active' : 'nav menu'}>
               < li><Link className='navbar-link' to='/nailpolishes'>Nail polish</Link></li>
               </ul>
            </Link>
         </nav>
 
     );
   }
 

 export default Navigation;







 
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Home from './Home'
// import Blushes from './blushes'
// import Bronzers from './bronzers'
// import Eyebrows from './eyebrows';
// import Eyeliners from './eyeliners';
// import Eyeshadows from './eyeshadows';
// import Foundations from './foundations';
// import Lipliners from './lipliners';
// import Lipsticks from './lipsticks';
// import Mascaras from './mascaras';
// import Nailpolishes from './nailpolishes';
// import BlushInfo from './blushInfo';
// import BronzersInfo from './bronzersInfo';
// import EyebrowsInfo from './eyebrowsInfo';
// import EyelinersInfo from './EyelinersInfo';
// import EyeshadowsInfo from './eyeshadowsInfo';
// import FoundationsInfo from './foundationsInfo';
// import LiplinersInfo from './liplinersInfo';
// import LipsticksInfo from './lipsticksInfo';
// import MascarasInfo from './mascarasInfo';
// import NailpolishesInfo from './nailpolishesInfo';
//import Cart from './Components/Cart';
//import Cart from './Components/mport Bag from './Components/ping-bag-solid.svg';


   //        <Router> 
   //       <Switch>
   //               {/* <Route exact path='/Cart' component={Cart}/> */}
   //               {/* <Route exact path='/' component={Home}/> */}
   //               <Route exact path='/bronzers' component={Bronzers}/>
   //               <Route path='/bronzers/' component={BronzersInfo}/>
   //               <Route exact path='/blushes' component={Blushes}/>
   //               <Route path='/blushes/' component={BlushInfo}/>
   //               <Route exact path='/eyebrows' component={Eyebrows}/>
   //               <Route path='/eyebrows/' component={EyebrowsInfo}/>
   //               <Route exact path='/eyeliners' component={Eyeliners}/> 
   //               <Route path='/eyeliners/' component={EyelinersInfo}/>
   //               <Route exact path='/eyeshadows' component={Eyeshadows}/>
   //               <Route path='/eyeshadows/' component={EyeshadowsInfo}/>
   //               <Route exact path='/foundations' component={Foundations}/> 
   //               <Route path='/foundations/' component={FoundationsInfo}/>
   //               <Route exact path='/lipliners' component={Lipliners}/>     
   //               <Route path='/lipliners/' component={LiplinersInfo}/>
   //               <Route exact path='/lipsticks' component={Lipsticks}/> 
   //               <Route path='/lipsticks/' component={LipsticksInfo}/>
   //               <Route exact path='/mascaras' component={Mascaras}/>   
   //               <Route path='/mascaras/' component={MascarasInfo}/>
   //               <Route exact path='/nailpolishes' component={Nailpolishes}/> 
   //               <Route path='/nailpolishes/' component={NailpolishesInfo}/>                  
   //       </Switch>
   //   </Router>