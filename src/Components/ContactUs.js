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
                           <li><Link>About</Link></li>
                           <li><Link>Contact</Link></li>
                           <li><Link>Customer Service</Link></li>
                           <li><Link>Careers</Link></li>
                        </ul>
                     </div>   
                     <div className='contact-div'>
                        <ul>
                           <li><Link>Pivacy Policy</Link></li>
                           <li><Link>Terms of Service</Link></li>
                           <li><Link>Payments</Link></li>
                           <li><Link>Feedback</Link></li>
                        </ul>
                     </div>
                     <div className='contact-div'> 
                        <ul>
                           <li><Link>Upcoming Products</Link></li>
                           <li><Link>Our History</Link></li>
                           <li><Link>Return Policy</Link></li>
                           <li><Link>Customer Stories</Link></li>
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