import React, {Component} from 'react';
import {fetchItemsNailPolish} from '../Actions/nailpolishActions';
import {connect} from 'react-redux';
import Nailpolish from './nailpolish';


class Nailpolishes extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsNailPolish())
    }

    renderItemNailPolish = () => {
        if(this.props.loading) {
            return 'loading'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, name) => <Nailpolish key={name} nailpolish={item}/>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderItemNailPolish()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Nailpolishes);