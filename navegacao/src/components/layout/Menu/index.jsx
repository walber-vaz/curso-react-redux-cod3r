import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Menu = () => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/param/123">Parâmetros</Link>
          </li>
          <li>
            <Link to="/useState">useState()</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect()</Link>
          </li>
          <li>
            <Link to="/useRef">useRef()</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo()</Link>
          </li>
          <li>
            <Link to="/useCallback">useCallback()</Link>
          </li>
          <li>
            <Link to="/useContext">useContext()</Link>
          </li>
          <li>
            <Link to="/useReducer">useReducer()</Link>
          </li>
          <li>
            <Link to="/useCustom">useMyHook()</Link>
          </li>
          <li>
            <Link to="/xablau">Não existir</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
