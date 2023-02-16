import React from 'react';
import PropTypes from 'prop-types';

function IndiretaChildren({ onInfo }) {
  const min = 50;
  const max = 100;
  const gerarIdade = () => parseInt(Math.random() * (max - min), 10) + min;
  return (
    <div>
      <p>Filho</p>
      <button type="button" onClick={() => onInfo('w2k', gerarIdade(), true)}>
        Fornecer informações
      </button>
    </div>
  );
}

IndiretaChildren.propTypes = {
  onInfo: PropTypes.func.isRequired,
};

export default IndiretaChildren;
