import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthContextComponent from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextComponent>
  <Router>
    <App/>
  </Router>
  </AuthContextComponent>
</React.StrictMode>,
);