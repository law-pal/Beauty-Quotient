import React, {Component} from 'react';
import {fetchItemsLipliner} from '../Actions/liplinerActions';
import {connect} from 'react-redux';
import Lipliner from './lipliner';
import {Link} from 'react-router-dom'


class Lipliners extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsLipliner())
    }

    renderItemLipliner = () => {
        if(this.props.loading) {
            return 'Beauty Products Loading...'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, index) => <Link key={index} to={`/lipliners/${item.id}`}><Lipliner lipliner={item}/></Link>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderItemLipliner()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Lipliners);