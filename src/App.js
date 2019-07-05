import React, { Component } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import { alertActions, userActions } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import  {HomePage}  from './components/HomePage';
import  {TestLoginPage}  from './components/LoginPage';
import  {TestRegisterPage}  from './components/RegisterPage';
import Notifications from './components/Notifications';
import Logout from './components/Logout';


class App extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
    }

    componentDidMount() {
        history.listen((location, action) => { 
            this.props.history.push(location);
        });
    }

    render() {
        const { alert } = this.props;

        return(
            <Notifications>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <Route path="/login" component={TestLoginPage}/>    
                        <Route path="/register" component={TestRegisterPage}/>
                        <Route path="/logout" component={Logout}/>
                    </Switch>
            </Notifications>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    registration: state.registration,
    alert: state.alert,
});

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(
    {
        clear: alertActions.clear,
        logout: userActions.logout,
    },dispatch) 
}

App = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export { App };



//HOST=0.0.0.0 PORT=8000 ./node_modules/.bin/react-scripts start (package.json)