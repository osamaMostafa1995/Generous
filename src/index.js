import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createStore , applyMiddleware} from 'redux';
import basketReducer from './store/reduce';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
const store = createStore(basketReducer , applyMiddleware(thunk) )
ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Provider store = {store}>
    <App />
    </Provider>
  </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

