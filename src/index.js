import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Foundation from 'react-foundation';

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
