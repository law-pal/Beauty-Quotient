import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 class SignUp extends Component {
      constructor(){
         super()
         this.state = {
            firstName: '',
            lastName: '',
            email: ''
         }
         
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      }

      handleFirstNameChange(event) {
         this.setState({username: event.target.value});
     }
 
     handleLastNameChange(event) {
         this.setState({lastName: event.target.value});
     }
 
     handleEmailChange(event) {
         this.setState({email: event.target.value});
     }
     
    handleSubmit(event) {
      alert('User Information was submitted: ');
      event.preventDefault();
  }

   render() {
      return (
         <Link>
            <div className='form-container'>
               <form className='form'>
                  <input placeholder='firstname' type='text' value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                  <input placeholder='lastname' type='text' value={this.state.firstName} onChange={this.handleLastNameChange}/>
                  <input placeholder='email' type='text' value={this.state.firstName} onChange={this.handleEmailChange}/>
               </form>
            </div>
         </Link>   
      )
   }
}



export default SignUp;