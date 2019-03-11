import React, { Component } from 'react';
import Buttons from './Buttons'

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0,
      operation: '',
      displayed: 0,
    }
  }

  clear() {
    this.setState({ a:0, b:0, operation:'', displayed:0 });
  }

  render() {
    return (
      <div>
        <Buttons clear={() => this.clear()} />
      </div>
    );
  }
}

export default Calculator;