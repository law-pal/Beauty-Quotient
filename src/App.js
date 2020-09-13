import React, {Component} from 'react';
import './App.css';
// import Items from './Components/Items';
// import Blushes from './Components/blushes'
import Navigation from './Components/Navigation'

class App extends Component {
  render(){
    return(
      <div className='grid-container'>
         <header>
            {/* <a>Beauty Quotient</a> */}
         </header>
         <main>
         <Navigation/>
            {/* <Items/>
            <Blushes/> */}
         </main>
         <footer>
           All rights reserve
         </footer>
      </div>
    );
  }
}
export default App;
