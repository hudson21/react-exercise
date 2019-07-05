import React, { Component } from 'react';
import { Route, Switch, Router, Redirect} from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';

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
            return <Redirect to={location}/>
        });
    }

    render() {
        const { alert } = this.props;

        return(
            <Notifications>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <Route path="/login" component={TestLoginPage}/>    
                        <Route path="/register" component={TestRegisterPage}/>
                        <Route path="/logout" component={Logout}/>
                    </Switch>
                </Router>
            </Notifications>
        );
    }
}

export { App };



//HOST=0.0.0.0 PORT=8000 ./node_modules/.bin/react-scripts start (package.json)