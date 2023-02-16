import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PassoForm extends Component {
  render() {
    const { passo, onHandleChange } = this.props;
    return (
      <div>
        <label htmlFor="passoInput">Passo: </label>
        <input
          type="number"
          id="passoInput"
          value={passo}
          onChange={onHandleChange}
        />
      </div>
    );
  }
}

PassoForm.propTypes = {
  passo: PropTypes.number.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};
