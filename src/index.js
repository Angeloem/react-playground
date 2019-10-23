import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import './Card.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import {searchRobots} from "./reducers";

// eslint-disable-next-line
let greet = "Hey Emanuel, I am enjoying using react here.  really enjoy it much much!";

const store = createStore(searchRobots);

ReactDOM.render(
    <App store={{store}}/>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
