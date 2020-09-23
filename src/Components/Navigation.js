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
                              
               <span>
                  <i class="fas fa-shopping-bag"></i>
               </span>
             
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/blushes'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/ContactUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/SignUp'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Link>
          <Button />
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
   