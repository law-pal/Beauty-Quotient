import React, {Component} from 'react';
import {fetchItemsLipstick} from '../Actions/lipstickActions';
import {connect} from 'react-redux';
import Lipstick from './lipstick';
import {Link} from 'react-router-dom'


class Lipsticks extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsLipstick())
    }

    renderItemLipstick = () => {
        if(this.props.loading) {
            return 'Beauty Products Loading...'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, index) => <Link key={index} to={`/lipsticks/${item.id}`}><Lipstick lipstick={item}/></Link>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderItemLipstick()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Lipsticks);