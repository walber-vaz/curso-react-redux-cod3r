import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import Buttom from './Buttom';
import PassoForm from './PassoForm';

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
        <Display numero={numero} />
        <PassoForm onHandleChange={this.handleChange} passo={passo} />
        <Buttom
          onHandleIncremente={this.handleIncrement}
          onHandleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

Contador.propTypes = {
  numeroInicial: PropTypes.number.isRequired,
  passoInicial: PropTypes.number.isRequired,
};
