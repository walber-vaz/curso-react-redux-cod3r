import React from 'react';
import ComProps from './components/basicos/ComProps';
import Primeiro from './components/basicos/Primeiro';

function App() {
  return (
    <div>
      <Primeiro />
      <ComProps titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
    </div>
  );
}

export default App;
