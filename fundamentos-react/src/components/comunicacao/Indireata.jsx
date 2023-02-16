/* eslint-disable react/jsx-no-bind */
import React from 'react';
import IndiretaChildren from './IndiretaChildren';

function Indireata() {
  function fornecerInformacaoes(nome, idade, nerd) {
    console.log(nome, idade, nerd);
  }

  return (
    <div>
      <h1>Pai</h1>
      <IndiretaChildren onInfo={fornecerInformacaoes} />
    </div>
  );
}

export default Indireata;
