import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Card.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
/* redux's part*/
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {requestRobots, searchRobots} from "./reducers";
import {Provider} from "react-redux";
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'


const logger = createLogger();

const rootReducer = combineReducers({
    searchRobots, requestRobots
});

const store =
    createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
