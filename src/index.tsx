import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {applyMiddleware,createStore} from 'redux';
// import {logger} from 'redux-logger';
import App from './App';
import './index.css';
// import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(appReducer,applyMiddleware(logger));

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
