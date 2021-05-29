import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { firebase } from "@firebase/app";
import "@firebase/auth";
import { config } from "./config/firebase";
import App from './App/pages/App';
import reportWebVitals from './reportWebVitals';
import {FirebaseAuthProvider} from "@react-firebase/auth";
import {CssBaseline} from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <CssBaseline />
          <FirebaseAuthProvider {...config} firebase={firebase}>
              <App />
          </FirebaseAuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
