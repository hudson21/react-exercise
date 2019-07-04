import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';


export function login(username, password) {
    // return the promise using fetch which adds to localstorage on resolve
    const user = {
        username,
        password
    }
    
    return(dispatch) => {
        fetch(`/users/authenticate`, {  
            method: 'POST',
            body: JSON.stringify(user)  
        })
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
        });
    }
    //console.log(username, password);
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}

export function logout() {
    // complete this function
}

export function register(user) {
    // return the promise using fetch which dispatches appropriately

    return(dispatch) => {
        fetch(`/users/register`, {  
            method: 'POST',
            body: JSON.stringify(user)  
        })
        .then(response => {
            dispatch(request(user));
            return response;
        })
        .then((response) => {
            console.log(response);
            dispatch(success(user));
        })
        .catch(err => {
            console.log(err);
            dispatch(failure(err));
        });
    }

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
