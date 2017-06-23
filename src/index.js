import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Foundation from 'react-foundation';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import './index.css';

var store = require('./store/configureStore').configure();
var actions = require('./actions/actions');

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(actions.addTodo('hi'));
store.dispatch(actions.addTodo('hello'));
store.dispatch(actions.addTodo('these'));

ReactDOM.render(
    <Provider store={store} >
    <Router>
        <App />
    </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
