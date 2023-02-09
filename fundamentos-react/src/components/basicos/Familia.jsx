import React from 'react';
import PropTypes from 'prop-types';

import FamiliaMembro from './FamiliaMembro';

const Familia = (props) => {
  const { lastName } = props;
  return (
    <div>
      <FamiliaMembro name="Walber" lastName={lastName} />
      <FamiliaMembro name="Ione" lastName={lastName} />
      <FamiliaMembro name="Pedro" lastName={lastName} />
      <FamiliaMembro name="Hadassa" lastName={lastName} />
    </div>
  );
};

Familia.propTypes = {
  lastName: PropTypes.string.isRequired,
};

export default Familia;
