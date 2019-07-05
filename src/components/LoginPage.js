import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Actions
import { login } from '../actions';
import Notifications from './Notifications';

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
        submitted: false,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authentication.loggedIn) {
            this.props.history.push('/');
        }
    }


    displayNotifications = (type, message) =>{
        this.setState({ type, message });
    };
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, type, message } = this.state;
        this.setState({ submitted: true });
        
        if (username && password) {
            this.props.login(username,password);
        }
        this.displayNotifications(type, message)
    }


    render() {
        const { username, password, submitted } = this.state;

        return (
            <div className="container">
                {this.props.alert.type && this.props.alert.message && <Notifications type={type} message={message} />}

                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login</h2>
                        <form onSubmit={this.handleSubmit} name="form">
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text" 
                                    className="form-control username" 
                                    name="username" 
                                    value={username}
                                    onChange={this.handleChange}/>
                                {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password" 
                                    value={password}
                                    onChange={this.handleChange}/>
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                                <Link to="/register" style={{marginLeft:'15px'}}>Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    return {
        alert,
        authentication
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
    {
        login
    },dispatch) 
}


const ReduxLogin = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export { ReduxLogin as TestLoginPage };