import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Filter extends Component {
   render() {
      return (
         <div className='filter'>
            <div className='filter-result'>{this.props.count} Items</div>
            <div className='filter-brand'>
               Brand{" "}
               <select value={this.props.brand} onChange={this.props.brand}>
                  <option value=''>All</option>
                  <option value='almay'>almay</option>
                  <option value='alva'>alva</option>
                  <option value='anna sui'>anna sui</option>
                  <option value='annabelle'>annabelle</option>
                  <option value='benefit'>benefit</option>
               </select>
               </div>
            <div className='filter-type'>
               Type{" "}
               <select value={this.props.product_type} onChange={this.props.type}>
                  <option value=''>All</option>
                  <option value='Blush'>Blush</option>
                  <option value='Bronze'>Bronzer</option>
                  <option value='Eyebrow'>Eyebrow</option>
                  <option value='Eyeliner'>Eyeliner</option>
                  <option value='Eyeshadow'>Eyeshadow</option>
                  <option value='Foundation'>Foundation</option>
                  <option value='Lip-liner'>Lip liner</option>
                  <option value='Lipstick'>Lipstick</option>
                  <option value='Mascara'>Mascara</option>
                  <option value='Nail-Polish'>Nail Polish</option>
               </select>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   items: state.items.items,
})
export default connect(mapStateToProps)(Filter);