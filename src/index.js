import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux'
import { store } from '../src/store/store'

// http://localhost:8800/
// https://successoverflow.herokuapp.com/
axios.defaults.baseURL = 'https://successoverflow.herokuapp.com/';

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    const tokenConfig = config;
    const token = localStorage.getItem('token');
    if (token) {
      tokenConfig.headers.Authorization = `Bearer ${token}`;
    }
    return tokenConfig;
  },
  error => {
    // Do something with request error
    return Promise.reject(error.data.msg);
  }
);

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
