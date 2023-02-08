import React from 'react';
import ComProps from './components/basicos/ComProps';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/desafio/Aleatorio';
import Card from './components/Layout/Card';

function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <Card titulo="Desafio Aleatório">
        <Aleatorio min={1} max={10} />
      </Card>
      <Card titulo="Desafio Primeiro componente">
        <Primeiro />
      </Card>
      <Card titulo="Desafio Props">
        <ComProps titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
      </Card>
    </div>
  );
}

export default App;
