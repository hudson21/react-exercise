import React from 'react';
import { render } from 'react-dom';

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
        <App /> 
</Provider>,

document.getElementById('app')
);
