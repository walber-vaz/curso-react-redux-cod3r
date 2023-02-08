import ReactDOM from 'react-dom';
import ComProps from './components/basicos/ComProps';
import Primeiro from './components/basicos/Primeiro';
import './index.css';

const root = document.querySelector('#root');
ReactDOM.render(
  <div>
    <Primeiro />
    <ComProps
      titulo="Situação do aluno"
      aluno="Pedro"
      nota={9.3}
    />
  </div>,
  root
);
