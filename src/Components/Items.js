import React, {Component} from 'react';
import {fetchItems} from '../Actions/itemsActions';
import {connect} from 'react-redux';


class Items extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItems())
    }

    renderItem = () => {
        if(this.props.loading) {
            return 'loading'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map(item => <Item key={item.name} cosmetic={item}/>
           );
        }
    }

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