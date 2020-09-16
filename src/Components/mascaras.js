import React, {Component} from 'react';
import {fetchItemsMascara} from '../Actions/mascaraActions';
import {connect} from 'react-redux';
import Mascara from './mascara';
import {Link} from 'react-router-dom';

class Mascaras extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchItemsMascara())
    }

    renderItemMascara = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display items...</p>
        }else {
            return this.props.items.map((item, index) => <Link key={index} to={`/mascaras/${item.id}`}><Mascara mascara={item}/></Link>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderItemMascara()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    loading: state.items.loading,
    hasErrors: state.items.hasErrors
})
export default connect(mapStateToProps)(Mascaras);