import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

const Familia = (props) => {
  const { children } = props;
  // Fazendo passar as props do componente pai para o componente filho
  // return <div>{cloneElement(children, { ...props })}</div>;
  // Recendo todos os elementos do componente pai
  return (
    <div>
      {Children.map(children, (child) => cloneElement(child, { ...props }))}
    </div>
  );
};

Familia.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Familia;
