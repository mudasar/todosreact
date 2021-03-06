import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Foundation from 'react-foundation';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import './index.css';

import TodoApi from './api/TodoAPi';
import './playground/firebaseplay';

var store = require('./store/configureStore').configure();
var actions = require('./actions/actions');



store.subscribe(()=>{
    var state = store.getState();
    TodoApi.setTodos(state.todos);
    console.log(state);
});

var initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

ReactDOM.render(
    <Provider store={store} >
    <Router>
        <App />
    </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
