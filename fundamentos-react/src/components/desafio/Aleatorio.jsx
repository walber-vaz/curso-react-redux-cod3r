import React from 'react';
import PropTypes from 'prop-types';

const Aleatorio = (props) => {
  const { max, min } = props;
  const aleatorio = Math.floor(Math.random() * (max - min + 1));
  return (
    <div>
      <h2>Número Aleatório</h2>
      <p>{`Entre ${min} e ${max}: ${aleatorio}`}</p>
    </div>
  );
};

Aleatorio.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default Aleatorio;
