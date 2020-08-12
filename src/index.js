import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';

// addPost('Some post test');


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


// let rerenderEntireTree = (state) => {
// }
// rerenderEntireTree();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();