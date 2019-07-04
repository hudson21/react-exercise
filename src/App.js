import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import { alertActions } from './actions';

//Components
import  {HomePage}  from './components/HomePage';
import  {TestLoginPage}  from './components/LoginPage';
import  {TestRegisterPage}  from './components/RegisterPage';

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
            <Switch>
                <PrivateRoute exact path="/" component={HomePage}/>
                <Route  path="/login" component={TestLoginPage}/>    
                <Route path="/register" component={TestLoginPage}/>
            </Switch>
        );
    }
}

//HOST=0.0.0.0 PORT=8000 ./node_modules/.bin/react-scripts start (package.json)