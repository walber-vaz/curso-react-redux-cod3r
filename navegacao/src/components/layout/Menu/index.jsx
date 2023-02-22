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
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
