import React, {Component} from 'react';
import {fetchItemsFoundation} from '../Actions/foundationActions';
import {connect} from 'react-redux';
import Foundation from './foundation';
import {Link} from 'react-router-dom'


class Foundations extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsFoundation())
    }

    renderItemFoundation = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, index) => <Link key={index} to={`/foundations/${item.id}`}><Foundation eyeshadow={item}/></Link>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderItemFoundation()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Foundations);