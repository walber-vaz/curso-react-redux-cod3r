import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gerarNumeros from '../../utils/geraNumeros';

import './Mega.css';

function Mega(props) {
  const [qtde, setQtde] = useState(props.qtde || 6);
  const [numeros, setNumeros] = useState(gerarNumeros(qtde));

  return (
    <div className="mega">
      <h2>Mega</h2>
      {numeros.map((numero) => (
        <span key={numero}>{numero}</span>
      ))}
      <div>
        <label>Quantidade de números</label>
        <input
          min="6"
          max="15"
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumeros(gerarNumeros(+e.target.value));
          }}
        />
      </div>
      <button type="button" onClick={() => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
}

Mega.propTypes = {
  qtde: PropTypes.number.isRequired,
};

export default Mega;
