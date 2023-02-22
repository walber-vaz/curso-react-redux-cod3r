import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../../pages/examples/About';
import Home from '../../../pages/examples/Home';
import NotFound from '../../../pages/examples/NotFound';
import Param from '../../../pages/examples/Param';
import UseCallback from '../../../pages/examples/UseCallback';
import UseContext from '../../../pages/examples/UseContext';
import UseCustom from '../../../pages/examples/UseCustom';
import UseEffect from '../../../pages/examples/UseEffect';
import UseMemo from '../../../pages/examples/UseMemo';
import UseReducer from '../../../pages/examples/UseReducer';
import UseRef from '../../../pages/examples/UseRef';
import UseState from '../../../pages/examples/UseState';

import './styles.css';

const Content = () => {
  return (
    <article className="content">
      <h1>Content</h1>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useContext" element={<UseContext />} />
        <Route path="/useCustom" element={<UseCustom />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
};

export default Content;
