import ReactDOM from 'react-dom';

import './index.css';

const tagH1 = <h1>Olá, React</h1>

const root = document.querySelector('#root');
ReactDOM.render(
  <div>
    {tagH1}
  </div>,
  root
);