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
        submitted: false
    }

    handleChange = (e) => {
        // handle input change and dispatch register
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // handle button click and dispatch register
        this.setState({ submitted: true });
        const { username, password, submitted } = this.state;
        const user = {
            username,
            password
        }
        if (username && password) {
            this.props.register(user);
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            className="form-control username" 
                            name="username"
                            value={username}
                            onChange={this.handleChange} 
                        />
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
                            onChange={this.handleChange}
                        />
                        {submitted && !password &&
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
})

const ReduxRegister = connect(mapStateToProps, { register })(RegisterPage);

export { ReduxRegister as TestRegisterPage };
