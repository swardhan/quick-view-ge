import React from 'react';
import ReactDOM from 'react-dom';
import popup from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.js';

let store = createStore(popup)

ReactDOM.render(
    <Provider store = { store }>
        <App store = {store}/>
    </Provider>
    , document.getElementById('root')
)