import React, {Component} from 'react';
import {fetchItemsEyeliner} from '../Actions/eyelinerActions';
import {connect} from 'react-redux';
import Eyeliner from './eyeliner';


class Eyeliners extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsEyeliner())
    }

    renderItemEyeliner = () => {
        if(this.props.loading) {
            return 'loading'
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
        return this.props.items.map((item, name) => <Eyeliner key={name} eyeliner={item}/>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderItemEyeliner()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Eyeliners);