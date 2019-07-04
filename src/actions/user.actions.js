import { userConstants } from '../constants';
import { userService } from '../services';
import { successAlert, errorAlert, clearAlert } from './alert.actions';
import { history } from '../helpers';

export {
    login,
    register,
    logout
}

function login(username, password) {
    // return the promise using fetch which adds to localstorage on resolve
    const user = {
        username,
        password
    }
    
    return(dispatch) => {
        userService.login(username, password)
        .then(response => {
            dispatch(request(user));
            return response;
        })
        .then((response) => {
            console.log(response);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(success(user));
        })
        .catch(err => {
            console.log(err);
            dispatch(failure(err));
            dispatch(errorAlert(err));
        });
    }
    //console.log(username, password);
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}

function logout() {
    // complete this function
}

function register(user) {
    // return the promise using fetch which dispatches appropriately

    return(dispatch) => {
        userService.register(user)
        .then(response => {
            console.log("register", response);
            dispatch(request(user));
            return response;
        })
        .then((response) => {
            dispatch(success(user));
            dispatch(successAlert('Registration Successful'));
        })
        .catch(err => {
            console.log(err);
            dispatch(failure(err));
            dispatch(errorAlert(err));
        });
    }

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
