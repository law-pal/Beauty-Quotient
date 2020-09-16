import React, { Component } from 'react';
import { fetchItemsBlush } from '../Actions/blushActions';
import Blush from './blush';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



class Blushes extends Component {

     componentDidMount() {
        this.props.dispatch(fetchItemsBlush())
    }

    
    renderBlush = () => {
        if(this.props.loading) {
            return 'Incoming beauty products loading...'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else{ 
        return this.props.items.map((item, index) => <Link  key={index} to={`/blushes/${item.id}`}><Blush blush={item}/>
      
        </Link>)      
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