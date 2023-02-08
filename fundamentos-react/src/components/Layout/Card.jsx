import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = (props) => {
  const { titulo, children } = props;
  return (
    <div className="card">
      <h2 className="title">{titulo}</h2>
      <p className="content">{children}</p>
    </div>
  );
};

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
