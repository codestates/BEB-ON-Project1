<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
=======
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import firebase from './firebase'; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();

>>>>>>> 2f825b76654ef1e1893d6b541c1630f006f73212
