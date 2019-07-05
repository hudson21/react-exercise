import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './alert.actions';
import { history } from '../helpers';

export const userActions = {
    login,
    register,
    logout
}

function login(username, password) {
    // return the promise using fetch which adds to localstorage on resolve
    
    return(dispatch) => {
        userService.login(username, password)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(request(user));
            dispatch(success(user));
            history.push('/');
        })
        .catch(err => {
            dispatch(failure(err));
            dispatch(alertActions.error(err));
        });
    }
    //console.log(username, password);
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}

function logout() {
    userService.logout();
    return{
        type: userConstants.LOGOUT
    }
}

function register(user) {
    // return the promise using fetch which dispatches appropriately

    return(dispatch) => {
        userService.register(user)
        .then(response => {
            dispatch(request(user));
            dispatch(success(user));
            dispatch(alertActions.success('Registration Successful'));
            history.push('/login');
        })
        .catch(err => {
            console.log(err);
            dispatch(failure(err));
            dispatch(alertActions.error(err));
        });
    }

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
