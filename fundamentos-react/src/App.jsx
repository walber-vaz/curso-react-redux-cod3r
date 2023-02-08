import React from 'react';
import ComProps from './components/basicos/ComProps';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/desafio/Aleatorio';

function App() {
  return (
    <div>
      <Primeiro />
      <ComProps titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
      <Aleatorio min={1} max={10} />
    </div>
  );
}

export default App;
