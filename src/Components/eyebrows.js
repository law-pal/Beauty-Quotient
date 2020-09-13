import React, {Component} from 'react';
import {fetchItemsEyebrow} from '../Actions/eyebrowActions';
import {connect} from 'react-redux';
import Eyebrow from './eyebrow';


class Eyebrows extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsEyebrow())
    }

    renderItemEyebrow = () => {
        if(this.props.loading) {
            return 'loading'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, name) => <Eyebrow key={name} eyebrow={item}/>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderItemEyebrow()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Eyebrows);