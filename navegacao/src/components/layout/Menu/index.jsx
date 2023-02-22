import React from 'react';

import './styles.css';

const Menu = () => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
