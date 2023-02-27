import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';

import { DataContext, data } from '../data/dataContext';
import './App.css';

const App = () => {
  const [state, setState] = useState(data);

  return (
    <div className="app">
      <DataContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Menu />
          <div className="container-content">
            <h1>React App</h1>
            <p>tutorial react router dom</p>
            <Content />
          </div>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
};

export default App;
