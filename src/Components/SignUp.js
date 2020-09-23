import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css'

 class SignUp extends Component {
         
      emptyUser ={
         firstaName: '',
         lastName: '',
         email: ''
      }
      constructor(props){
         super(props)
         this.state = {
            user: this.emptyUser
         }
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }

      async componentDidMount(){
         if(this.props.match.params.id !== 'new'){
            const users = await (await fetch(`beauty_api/v1/user${this.props.match.params.id}`)).json(); 
            this.setState({user: users});
         }
      }

      handleChange(event) {
         const target = event.target;
         const value = target.value;
         const name= target.name;
         let item = {...this.state.item};
         item[name] = value;
         this.setState({item});
      }

      async handleSubmit(event) {
         event.preventDefault();
         const{item} = this.state;

         await fetch('beauty_api/v1/user', {
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
                  <input placeholder='firstname' type='text' onChange={this.handleChange} autoComplete='name'/>
                  <input placeholder='lastname' type='text' onChange={this.handleChange} autoComplete='lastname'/>
                  <input placeholder='email' type='text' onChange={this.handleChange} autoComplete='email'/>
                  <div><button onClick={this.handleSubmit}className='submit-button' type='submit'>Submit</button></div>
               </form>
            </div>
         </Link>   
      )
   }
}



export default SignUp;