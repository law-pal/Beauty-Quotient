import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './Navigation.css';
import './Dropdown.css';
import './Button.css';
import {Button} from './Button';
import Dropdown from './Dropdown';


 const Navigation = () => {

      const [click, setClick] = useState(false);
      const [dropdown,setDropdown] = useState(false);
     
      const handleClick = () => setClick(!click);
      const closeMobileMenu = () => setClick(false);

      const onMouseEnter = () => {
         if(window.innerWidth < 960) {
            setDropdown(false);
         }else {
            setDropdown(true);
         }
      };

      const onMouseLeave = () => {
         if(window.innerWidth < 960) {
            setDropdown(false);
         }else {
            setDropdown(false);
         }
      };

    return( 

      <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <h6>Beauty Quotient</h6>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Cart'
              className='nav-links'
              onClick={closeMobileMenu}
            >
                              
               <span color='white'>
                  <i class="fas fa-shopping-bag"></i>
               </span>
             
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navigation;
         // <ul className='navbar'>
//          <nav className='navbar'> 
//              <ul  className={click ? 'nav-menu active' : 'nav menu'}>
//                <Link className='navbar-logo' to='/'>
//                   <h3>Beauty Quotient</h3>
//                </Link>
//                <div className='menu-icon' onClick={handleClick}>
//                   <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
//                </div>
              
//                   <li className='nav-item'>
//                      <Link className='nav-links' to='/' onClick={closeMobileMenu}>
//                         <h3>Home</h3>
//                      </Link>
//                   </li>
//                   <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//                      <Link  className='nav-links' >
//                         <h3>Our Products<i className='fas fa-caret-down'/></h3>
//                         {dropdown && <Dropdown/>}
//                      </Link>
//                   </li>
//                   <li className='nav-item'  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//                      <Link  className='nav-links' >
//                         {/* <h3>Face<i className='fas fa-caret-down'/></h3>
//                         {dropdown && <Dropdown/>} */}
//                      </Link>
//                   </li>
//                   <li className='nav-item'  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//                      <Link className='nav-links' to='/Cart' >
//                        <h3>Shopping Bag</h3>
//                         {/* <h3>Lips<i className='fas fa-caret-down'/></h3>
//                         {dropdown && <Dropdown/>} */}
//                      </Link>
//                   </li>
//                   {/* <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//                      <Link className='nav-links' >
//                         <h3>Nails<i className='fas fa-caret-down'/></h3>
//                         {dropdown && <Dropdown/>}
//                      </Link>
//                   </li>            */}
//                <Link className='class-links-mobile' to='/sign-up' onClick={closeMobileMenu}>
//                   <Button/>
//                </Link>
//                </ul>
//          </nav>
//      );
//    }
 

//  export default Navigation;

   
               {/* <Link>
                  <h3>Lips<i className='fas fa-caret-down'/></h3>
                  <li className={click ? 'nav-menu active' : 'nav menu'}>
                
                  </li>
               </Link>
               <Link>
                  <h3>Nails<i className='fas fa-caret-down'/></h3>
                  <li className={click ? 'nav-menu active' : 'nav menu'}>
                
                  </li> */}

  {/* <li><Link className='navbar-link' to='/eyebrows'>Eyebrows</Link></li>
                  <li><Link className='navbar-link' to='/eyeliners'>Eyeliners</Link></li>
                  <li><Link className='navbar-link' to='/eyeshadows'>Eyeshadows</Link></li> */}


   {/* <li><Link className='navbar-link' to='/foundations'>Foundations</Link></li>
                  <li><Link className='navbar-link' to='/bronzers'>Bronzers</Link></li>
                  <li><Link className='navbar-link' to='/blushes'>Blushes</Link></li>
                  <li><Link className='navbar-link' to='/mascaras'>Mascaras</Link></li> */}

     {/* <li><Link className='navbar-link' to='/lipliners'>Lipliners</Link></li>
                  <li><Link className='navbar-link' to='/lipsticks'>Lipsticks</Link></li> */}

   {/* < li><Link className='navbar-link' to='/nailpolishes'>Nail polish</Link></li> */}
 
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