import React from 'react';
import {  withRouter } from 'react-router-dom';
import { render } from 'react-dom';

//Helpers
import { store } from './helpers';

//Fake API
import { configureFakeAPI } from './helpers';

//Redux
import { Provider, connect } from 'react-redux';

//Reducer
import rootReducer from './reducers';


//Components
import  { App }  from './App';

configureFakeAPI();

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    registration: state.registration,
    alert: state.alert,
});

const RootComponent = connect(mapStateToProps, null)(App);

render(
<Provider store={store}>
        <RootComponent /> 
</Provider>,

document.getElementById('app')
);
