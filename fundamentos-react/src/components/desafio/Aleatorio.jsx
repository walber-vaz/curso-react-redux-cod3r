import React from 'react';
import PropTypes from 'prop-types';

const Aleatorio = (props) => {
  const { max, min } = props;
  const aleatorio = Math.floor(Math.random() * (max - min + 1));
  return (
    <div>
      <div>Número Aleátorio</div>
      <p>
        Entre {min} e {max}: {aleatorio}
      </p>
    </div>
  );
};

Aleatorio.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default Aleatorio;
