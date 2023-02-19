import React from 'react';
import ComProps from './components/basicos/ComProps';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/desafio/Aleatorio';
import Card from './components/Layout/Card';
import Familia from './components/basicos/Familia';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParImpar from './components/condicional/ParImpar';
import UserInfo from './components/condicional/UserInfo';

import './App.css';
import generateColorCardAleatory from './utils/generationColor';
import Direta from './components/comunicacao/Direta';
import Indireata from './components/comunicacao/Indireata';
import Input from './components/Form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/desafio/Mega';

function App() {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>
      <div className="wrapper">
        <Card titulo="Desafio Aleatório" color={generateColorCardAleatory()}>
          <Aleatorio min={1} max={10} />
        </Card>
        <Card
          titulo="Desafio Primeiro componente"
          color={generateColorCardAleatory()}
        >
          <Primeiro />
        </Card>
        <Card titulo="Desafio Props" color={generateColorCardAleatory()}>
          <ComProps titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
        </Card>
        <Card titulo="Desafio Familia" color={generateColorCardAleatory()}>
          <Familia lastName="Vaz">
            <FamiliaMembro name="Walber" lastName="Vaz" />
            <FamiliaMembro name="Pedro" lastName="Vaz" />
            <FamiliaMembro name="Hadassa" lastName="Vaz" />
            <FamiliaMembro name="Ione" lastName="Vaz" />
          </Familia>
        </Card>
        <Card titulo="Desafio Repetição" color={generateColorCardAleatory()}>
          <ListaAlunos />
        </Card>
        <Card titulo="Desafio Repetição" color={generateColorCardAleatory()}>
          <TabelaProdutos />
        </Card>
        <Card titulo="Desafio Condicional" color={generateColorCardAleatory()}>
          <ParImpar numero={20} />
        </Card>
        <Card titulo="Desafio Condicional" color={generateColorCardAleatory()}>
          <UserInfo usuario={{ nome: 'Pedro' }} />
        </Card>
        <Card titulo="Desafio Condicional" color={generateColorCardAleatory()}>
          <UserInfo usuario={{ email: 'email@email.com' }} />
        </Card>
        <Card
          titulo="Desafio Comunicação Direta"
          color={generateColorCardAleatory()}
        >
          <Direta />
        </Card>
        <Card titulo="Desafio indireta" color={generateColorCardAleatory()}>
          <Indireata />
        </Card>
        <Card
          titulo="Desafio componente controlado"
          color={generateColorCardAleatory()}
        >
          <Input />
        </Card>
        <Card
          titulo="Desafio Componente de Class"
          color={generateColorCardAleatory()}
        >
          <Contador numeroInicial={10} />
        </Card>
        <Card titulo="Desafio mega sena" color={generateColorCardAleatory()}>
          <Mega />
        </Card>
      </div>
    </div>
  );
}

export default App;
