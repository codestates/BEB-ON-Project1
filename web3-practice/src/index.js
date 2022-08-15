import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import firebase from './firebase'; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();
