import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Actions
import { login } from '../actions';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        // reset login status
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.login(username,password);
        
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="container">
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

const mapStateToProps = (state) => ({
    authentication: state.authentication,
});

const maptDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login
    }, dispatch)
};

connect(mapStateToProps, maptDispatchToProps )(LoginPage);

export { LoginPage as TestLoginPage };
