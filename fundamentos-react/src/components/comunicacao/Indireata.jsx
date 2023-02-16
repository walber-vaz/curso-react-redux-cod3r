/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import IndiretaChildren from './IndiretaChildren';

function Indireata() {
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacaoes(nomeChildren, idadeChildren, nerdChildren) {
    setIdade(idadeChildren);
    setNerd(nerdChildren);
    setNome(nomeChildren);
  }

  return (
    <div>
      <h1>Pai</h1>
      <span>{nome}</span>
      <span> {idade}</span>
      <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
      <IndiretaChildren onInfo={fornecerInformacaoes} />
    </div>
  );
}

export default Indireata;
