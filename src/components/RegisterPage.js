import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { register } from '../actions';

class RegisterPage extends Component {
    
    state = {
        user : {
            username: '',
            password: '',
        },
        submitted: false,
        type: this.props.type,
        message: this.props.message
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type === 'alert-success') {
            this.props.history.push('/login');
        }
    }

    componentWillUnmount() {
        this.setState({type: '', message: ''});
    }

    handleChange = (e) => {
        const { user } = this.state;
        user[e.target.name] = e.target.value;
        // handle input change and dispatch register
        this.setState({ user });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // handle button click and dispatch register
        this.setState({ submitted: true });
        const { user } = this.state;
        
        if (user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            className="form-control username" 
                            name="username"
                            value={user.username}
                            onChange={this.handleChange} 
                        />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            value={user.password}
                            onChange={this.handleChange}
                        />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

// complete the below function
const mapStateToProps = (state) => ({
    registration: state.registration,
    type: state.alert.type,
    message: state.alert.message
})

const ReduxRegister = connect(mapStateToProps, { register })(RegisterPage);

export { ReduxRegister as TestRegisterPage };
