import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation';

class App extends Component {
  render(){
    return(

      // <div className='main-container'>
      //   <Bronzers/>
      // </div>
      <div className='grid-container'>
         <header>
    
         </header>
         <main className='main'>
            <div className='content'>
              <div className='main-content'>
                  <Navigation/>
              </div>
            </div>
         </main>
         <footer>
           All rights reserve
         </footer>
      </div>
    );
  }
}
export default App;
