import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ContactUs.css'

 class ContactUs extends Component {
   render() {
      return (
         <Link>
               <div>
                  <div className='contact-us-container'>
                     <div className='contact-div'>
                        <ul>
                           <li><a href='#'>About</a></li>
                           <li><a href='#'>Contact</a></li>
                           <li><a href='#'>Customer Service</a></li>
                           <li><a href='#'>Careers</a></li>
                        </ul>
                     </div>   
                     <div className='contact-div'>
                        <ul>
                           <li><a href='#'>Pivacy Policy</a></li>
                           <li><a href='#'>Terms of Service</a></li>
                           <li><a href='#'>Payments</a></li>
                           <li><a href='#'>Feedback</a></li>
                        </ul>
                     </div>
                     <div className='contact-div'> 
                        <ul>
                           <li><a href='#'>Upcoming Products</a></li>
                           <li><a href='#'>Our History</a></li>
                           <li><a href='#'>Return Policy</a></li>
                           <li><a href='#'>Customer Stories</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className='contact-us-i'>
                     <i className='fas fa-shipping-fast'/>
                     <i className='fab fa-paypal'/>
                     <i className='fab fa-apple-pay'/>
                     <i className='fab fa-google-pay'/>
                     <i className='fas fa-camera-retro'/>
                     <i className='far fa-thumbs-up'/>
                  </div>
               </div>
         </Link>
      )
   }
}



export default ContactUs;