import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';
//import loggerMiddleware from './lib/loggerMiddleware.js'
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk'; // 액션객체가 아닌 함수로 넘겨주어서 여러가지 확장성을 부여함

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
