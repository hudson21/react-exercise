import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userActions } from '../actions';


class Logout extends Component {

    componentWillMount() {
        this.props.logout();
        this.props.history.push('/login');
    }

    render() {
        return null;
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(
    {
        logout: userActions.logout,
    },dispatch) 
}

export default connect(null, mapDispatchToProps)(Logout);