import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import App from './App';
import './index.css';
import appReducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
import {logger} from 'redux-logger';

const store = createStore(appReducer,applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
