import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { render } from 'react-dom';

//Helpers
import { store } from './helpers';

//Fake API
import { configureFakeAPI } from './helpers';

//Redux
import { Provider, connect } from 'react-redux';

//Reducer
import rootReducer from './reducers';

//Actions
import { success, error, clear, login, logout, register } from './actions';

//Components
import { App } from './App';

configureFakeAPI();

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    registration: state.registration,
    alert: state.aler,
});

const RootComponent = withRouter(connect(mapStateToProps, { ,  })(App));

render(
<Provider store={store}>
    <Router>
        <RootComponent />
    </Router>
</Provider>,

document.getElementById('app')
);
