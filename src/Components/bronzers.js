import React, {Component} from 'react';
import {fetchItemsBronzer} from '../Actions/bonzersActions';
import {connect} from 'react-redux';
import Bronzer from './bronzer';
import {Link} from 'react-router-dom';


class Bronzers extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsBronzer())
    }

    renderItemBronzer = () => {
        if(this.props.loading) {
            return 'Beauty Products Loading...'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, index) => <Link key={index} to={`/bronzers/${item.id}`}><Bronzer bronzer={item}/>
      </Link>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderItemBronzer()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Bronzers);