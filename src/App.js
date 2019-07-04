import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import { alertActions } from './actions';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';

export class App extends React.Component {
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
                <Route exact path="/" component={HomePage}/>
                <Route  path="/login" component={LoginPage}/>    
                <Route path="/register" component={RegisterPage}/>
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}



//HOST=0.0.0.0 PORT=8000 ./node_modules/.bin/react-scripts start (package.json)