import React, { Component } from 'react';
import { fetchItemsBlush } from '../Actions/blushActions';
import {connect} from 'react-redux';
import Blush from './blush';



class Blushes extends Component {

     componentDidMount() {
        this.props.dispatch(fetchItemsBlush())
    }

    
    renderBlush = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, name) => <Blush key={name} blush={item}/>)
           
        }
    }

    render(){

        return(
            <div>{this.renderBlush()}</div>
        );
    }
}


const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Blushes);