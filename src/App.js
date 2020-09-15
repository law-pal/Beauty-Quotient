import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Filter from './Components/Filter';
import Navigation from './Components/Navigation';

class App extends Component {

  
filterBrand = (event) => {
    const brand = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
     brand: brand,
     items: this.props.items.slice()
   }))
}

filterType = (event) => {
  console.log(event.target.value);
  if(event.target.value === ''){
    this.setState({type: event.target.value, items: this.props.product_type});
  } else{
  this.setState({
    type: event.target.value,
    items: this.props.type.filter(type => type.name.indexOf(event.target.value) >= 0)
  });
}
}

  render(){
    return(

      <div className='grid-container'>
         <header>
            <h1>Beauty Quotient</h1>
         </header>
         <main className='main'>
         <Filter
            count={this.props.items.length}
            brand={this.props.name}
            type={this.props.product_type}
            filterBrand={this.filterBrand}
            filterType={this.filterType} 
         ></Filter>
            <div className='main-content'>
                <Navigation/>
            </div>
         </main>
         <footer>
           All rights reserve
         </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items,
})
export default connect(mapStateToProps)(App);
