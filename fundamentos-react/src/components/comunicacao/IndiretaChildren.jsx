import React from 'react';
import PropTypes from 'prop-types';

function IndiretaChildren({ onInfo }) {
  return (
    <div>
      <p>Filho</p>
      <button type="button" onClick={() => onInfo('w2k', 32, true)}>
        Fornecer informações
      </button>
    </div>
  );
}

IndiretaChildren.propTypes = {
  onInfo: PropTypes.func.isRequired,
};

export default IndiretaChildren;
