import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  render() {
    const { numero } = this.props;
    return (
      <div>
        <p>Valor inicial: {numero}</p>
      </div>
    );
  }
}

Display.propTypes = {
  numero: PropTypes.number.isRequired,
};
