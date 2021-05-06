import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
=======
import {HashRouter, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const Router = process.env.NODE_ENV === ' development' ? HashRouter : BrowserRouter;
ReactDOM.render(
  <React.StrictMode>
    <Router>
>>>>>>> 42ef3bee96893fc1208b1a76ffb84c883f632098
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
