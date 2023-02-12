import React from 'react';
import PropTypes from 'prop-types';

const If = ({ children, test }) => <div>{test ? children : false}</div>;

If.propTypes = {
  test: PropTypes.bool,
  children: PropTypes.node,
}.isRequired;

export default If;
