import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { rootreducer } from "./redux";
import { watcherSaga } from "./container/Main";

const composeEnhancer = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__|| compose
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  rootreducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
