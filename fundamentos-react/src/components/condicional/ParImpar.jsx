import React from 'react';
import PropTypes from 'prop-types';

const ParImpar = ({ numero }) => (
  <div>
    <h2>Par ou Impar</h2>
    {numero % 2 === 0 ? (
      <span>{`O numero ${numero} é Par`}</span>
    ) : (
      <span>{`O numero ${numero} é Impar`}</span>
    )}
  </div>
);

ParImpar.defaultProps = {
  numero: 0,
};

ParImpar.propTypes = {
  numero: PropTypes.number,
};

export default ParImpar;
