import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.js"
import "bootstrap/dist/js/bootstrap.min.js"
import "react-router-dom"
import './style.scss';
import store from './store'
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
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

