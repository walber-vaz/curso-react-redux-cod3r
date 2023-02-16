import React from 'react';
import PropTypes from 'prop-types';

function DiretaChildren({ texto, numero, bool }) {
  return (
    <div>
      <p>{texto}</p>
      <p>{numero}</p>
      <p>{bool ? 'Verdadeiro' : 'Falso'}!</p>
    </div>
  );
}

DiretaChildren.propTypes = {
  texto: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
  bool: PropTypes.bool.isRequired,
};

export default DiretaChildren;
