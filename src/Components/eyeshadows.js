import React, {Component} from 'react';
import {fetchItemsEyeshadow} from '../Actions/eyeshadowActions';
import {connect} from 'react-redux';
import Eyeshadow from './eyeshadow';


class Eyeshadows extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsEyeshadow())
    }

    renderItemEyeshadow = () => {
        if(this.props.loading) {
            return 'loading'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, name) => <Eyeshadow key={name} eyeshadow={item}/>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderItemEyeshadow()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Eyeshadows);