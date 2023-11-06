// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import logo from './logo.png';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
