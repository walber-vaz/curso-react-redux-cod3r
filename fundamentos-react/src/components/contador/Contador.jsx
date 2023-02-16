import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  handleIncrement = () => {
    const { numero, passo } = this.state;
    this.setState({
      numero: numero + passo,
    });
  };

  handleDecrement = () => {
    const { numero, passo } = this.state;
    this.setState({
      numero: numero - passo,
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      passo: +target.value,
    });
  };

  render() {
    const { numero, passo } = this.state;
    return (
      <div>
        <div>Contador</div>
        <p>Valor inicial: {numero}</p>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            type="number"
            id="passoInput"
            value={passo}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="button"
          onClick={() => this.handleIncrement()}
          style={{
            padding: 5,
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => this.handleDecrement()}
          style={{
            padding: 5,
          }}
        >
          -
        </button>
      </div>
    );
  }
}

Contador.propTypes = {
  numeroInicial: PropTypes.number.isRequired,
  passoInicial: PropTypes.number.isRequired,
};
