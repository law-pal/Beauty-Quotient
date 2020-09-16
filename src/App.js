import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Filter from './Components/Filter';
import Navigation from './Components/Navigation';



class App extends Component {

  
  filterBrand = (event) => {
    console.log(event.target.value)
    // const brandName = event.target.value;
    // this.setState((brand) => ({
    //  brandName: brand,
    //  items: this.props.items.slice()
   //}))
}

 
filterType = (event) => {
  console.log(event.target.value);

}
  render(){
    return(

      <div className='grid-container'>
         <header>
            <h1>Beauty Quotient</h1>
            <Filter 
            count={this.props.items.length}
            brandName={this.props.brand}
            type={this.props.product_type}
            filterBrand={this.filterBrand}
            filterType={this.filterType} 
            ></Filter>
        </header>
        
         <main className='main'>
         {/* <Filter
            count={this.props.items.length}
            brand={this.props.name}
            type={this.props.product_type}
            filterBrand={this.filterBrand}
            filterType={this.filterType} 
         ></Filter> */}
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
