import React, { Component } from 'react';
import Buttons from './Buttons';
import Display from './Display';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      a: '0',
      b: '0',
      operation: '',
      displayed: '0',
    }
  }

  clear() {
    this.setState({ a: '0', b: '0', operation: '', displayed: '0' });
  }

  addDigit(digit) {
    const { a, b, operation } = this.state;
    if(operation === '') {
      if(a === '0') {
        this.setState({ a: digit, displayed: digit });
      } else if (a.length < 9) {
        this.setState({ a: a.concat(digit), displayed: a.concat(digit) });
      }
    } else {
      if(b === 0) {
        this.setState({ b: digit, displayed: digit });
      } else if (b.length < 9) {
        this.setState({ b: b.concat(digit), displayed: b.concat(digit) });
      }
    }
  }

  render() {
    return (
      <div>
        <Display text={this.state.displayed}/>
        <Buttons clear={() => this.clear()} addDigit={digit => this.addDigit(digit)}/>
      </div>
    );
  }
}

export default Calculator;