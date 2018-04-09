import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './css/index.css';
import App from './components/app';
import rootReducers from './reducers';
import {colocarDelay}  from './middlewares';

let middlewares = [thunk, colocarDelay];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

let store = createStore(
    rootReducers,
    applyMiddleware(...middlewares)
);

ReactDOM.render(<App store={store} />, document.getElementById('root'));