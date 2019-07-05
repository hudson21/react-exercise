import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Helpers
import { store } from './helpers';

//Fake API
import { configureFakeAPI } from './helpers';

//Redux
import { Provider } from 'react-redux';

//Components
import { App } from './App';

configureFakeAPI();


render(
<Provider store={store}>
    <Router>
        <App/>
    </Router>  
</Provider>,

document.getElementById('app')
);
