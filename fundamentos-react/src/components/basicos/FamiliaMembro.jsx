import React from 'react';
import PropTypes from 'prop-types';

const FamiliaMembro = (props) => {
  const { name, lastName } = props;
  return (
    <div>
      {name} {lastName}
    </div>
  );
};

FamiliaMembro.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default FamiliaMembro;
