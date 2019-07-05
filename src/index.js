import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, withRouter  } from 'react-router-dom';


//Actions
import { alertActions, userActions } from './actions';

//Helpers
import { store } from './helpers';

//Fake API
import { configureFakeAPI } from './helpers';

//Redux
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import { App } from './App';

configureFakeAPI();

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    registration: state.registration,
    alert: state.alert,
});

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(
    {
        clear: alertActions.clear,
        logout: userActions.logout,
    },dispatch) 
}

const RootApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


render(
<Provider store={store}>
    <BrowserRouter>
        <RootApp/>
    </BrowserRouter>  
</Provider>,

document.getElementById('app')
);
