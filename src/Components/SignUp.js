import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css'

 class SignUp extends Component {
         
      emptyUser ={
         firstName: '',
         lastName: '',
         email: ''
      }
      constructor(props){
         super(props)
         this.state = {
            user: this.emptyUser,
            firstName: '',
            lastName: '',
            email: ''
         }
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }

      async componentDidMount(){
         if(this.props.match.params.id !== 'new'){
            const users = await (await fetch(`http://heroku-beauty-quotient.herokuapp.com/beauty_api/v1/user${this.props.match.params.id}`)).json(); 
            this.setState({user: users});
         }
      }

      handleChange(event) {
         const {name, value} = event.target;
         this.setState({[name]: value});
      }

      async handleSubmit(event) {
         event.preventDefault();
         const {firstName, lastName, email} = this.state;
         let item = {
            firstName,
            lastName,
            email
         }
         console.log(item)
         await fetch('http://heroku-beauty-quotient.herokuapp.com/beauty_api/v1/user', {
            method: (item.id) ? 'PUT' : 'POST', 
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
         });
         this.props.history.push('/');
      }


   render() {
      const{item} = this.state;
      const title = <h2>{item ? 'Thank You' : 'Add Info'}</h2>;
      return (
         <Link>
         {title}
            <div className='form-container'>
               <form className='form' onSubmit={this.handleSubmit}>
                  <input placeholder='firstname' type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} autoComplete='name'/>
                  <input placeholder='lastname' type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} autoComplete='lastname'/>
                  <input placeholder='email' type='text' name='email' onChange={this.handleChange} value={this.state.email} autoComplete='email'/>
                  <div><button onClick={this.handleSubmit}className='submit-button' type='submit'>Submit</button></div>
               </form>
            </div>
         </Link>   
      )
   }
}



export default SignUp;