import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Buttom extends Component {
  render() {
    const { onHandleIncremente, onHandleDecrement } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={() => onHandleIncremente()}
          style={{
            padding: 5,
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => onHandleDecrement()}
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

Buttom.propTypes = {
  onHandleDecrement: PropTypes.func.isRequired,
  onHandleIncremente: PropTypes.func.isRequired,
};
