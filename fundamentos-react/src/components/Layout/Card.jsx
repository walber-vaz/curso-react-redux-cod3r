import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = (props) => {
  const { titulo, children, color } = props;

  const cardStyle = {
    backgroundColor: color || '#F00',
    borderColor: color || '#F00',
  };

  return (
    <div className="card" style={cardStyle}>
      <h2 className="title">{titulo}</h2>
      <p className="content">{children}</p>
    </div>
  );
};

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;
