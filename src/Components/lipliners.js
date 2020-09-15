import React, {Component} from 'react';
import {fetchItemsLipliner} from '../Actions/liplinerActions';
import {connect} from 'react-redux';
import Lipliner from './lipliner';


class Lipliners extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsLipliner())
    }

    renderItemLipliner = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, name) => <Lipliner key={name} lipliner={item}/>
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