export const userService = {
    login,
    logout,
    register
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    // call `/users/authenticate` with requestOptions to authenticate the login process
    return fetch('/users/authenticate', requestOptions)
    .then(() => localStorage.setItem('user', JSON.stringify({username, password})));
    
}

function logout() {
    // remove user from local storage to log user out
    return localStorage.removeItem('user');
}


function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/register', requestOptions).then(handleResponse);
}


function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return Promise.resolve(response.json());
}
