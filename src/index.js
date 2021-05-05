import React from 'react';
import ReactDOM from 'react-dom';
import './SCSS/Index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Store/Store';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
