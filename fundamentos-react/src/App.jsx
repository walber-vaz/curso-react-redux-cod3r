import React from 'react';
import ComProps from './components/basicos/ComProps';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/desafio/Aleatorio';
import Card from './components/Layout/Card';

import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>
      <div className="wrapper">
        <Card titulo="Desafio Aleatório" color="#FA6900">
          <Aleatorio min={1} max={10} />
        </Card>
        <Card titulo="Desafio Primeiro componente" color="#E94C6F">
          <Primeiro />
        </Card>
        <Card titulo="Desafio Props" color="#588c73">
          <ComProps titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
        </Card>
      </div>
    </div>
  );
}

export default App;
