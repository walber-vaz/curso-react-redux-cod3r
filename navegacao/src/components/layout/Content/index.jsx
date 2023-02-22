import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../../pages/examples/About';
import Home from '../../../pages/examples/Home';
import Param from '../../../pages/examples/Param';

import './styles.css';

const Content = () => {
  return (
    <article className="content">
      <h1>Content</h1>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </article>
  );
};

export default Content;
