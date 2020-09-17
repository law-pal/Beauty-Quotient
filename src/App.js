import React, {Component} from 'react';
import './App.css';
import Filter from './Components/Filter';
import Navigation from './Components/Navigation';
import Cart from './Components/Cart'



class App extends Component {

  render(){
    return(
        <div>
          <div className='grid-container'>
            <header>
                <h1>Beauty Quotient</h1>
              
            </header>
            <main className='main'>
                <Cart/>
                <div className='main-content'>
                    <Navigation/>
                </div>
            </main>
            <footer>
              All rights reserve
          </footer>
          </div>
        </div>   
    );
  }
}

export default App;
