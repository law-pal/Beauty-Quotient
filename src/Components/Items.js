import React, {Component} from 'react';
import {fetchItems} from '../Actions/itemsActions';
import {connect} from 'react-redux';
import Item from './Item'
import { fetchItemsBlush } from '../Actions/blushActions';


class Items extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItems())
        //this.props.dispatch(fetchItemsBlush())
    }

    renderItem = () => {
        if(this.props.loading) {
            return 'loading'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, name) => <Item key={name} cosmetic={item}/>
           );
        }
    }

    // renderBlush = () => {
    //     if(this.props.loading) {
    //         return 'loading'
    //     }else if(this.props.hasErrors) {
    //         return <p>error can't display items...</p>
    //     }else {
    //     return this.props.items.map((item, name) => <Blush key={name} blush={item}/>
    //        );
    //     }
    // }

    render() {
        return(
            
            <div>
                {this.renderItem()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Items);