import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { render } from 'react-dom';

//Helpers
import { store } from './helpers';

//Fake API
import { configureFakeAPI } from './helpers';

//Redux
import { Provider } from 'react-redux';

//Reducer
import rootReducer from './reducers';

//Components
import { App } from './App';

configureFakeAPI();

const RootComponent = withRouter(App);

render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,

document.getElementById('app')
);
