import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import { alertActions } from './actions';

//Components
import  {HomePage}  from './components/HomePage';
import  {TestLoginPage}  from './components/LoginPage';
import  {TestRegisterPage}  from './components/RegisterPage';
import Notififations from './components/Notifications';

export class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        
        history.listen((location, action) => {

        });
    }

    render() {
        const { alert } = this.props;

        return(
            <Router>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/login" component={TestLoginPage}/>    
                    <Route path="/register" component={TestRegisterPage}/>
                    <Route path="/notifications" component={Notififations}/>
                </Switch>
            </Router>
            
        );
    }
}


//HOST=0.0.0.0 PORT=8000 ./node_modules/.bin/react-scripts start (package.json)