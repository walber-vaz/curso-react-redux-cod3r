import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';

import { Store } from '../data/Store';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Store>
        <BrowserRouter>
          <Menu />
          <div className="container-content">
            <h1>React App</h1>
            <p>tutorial react router dom</p>
            <Content />
          </div>
        </BrowserRouter>
      </Store>
    </div>
  );
};

export default App;
