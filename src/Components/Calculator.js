import React, { Component } from 'react';
import Buttons from './Buttons';

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

  addDigit = digit => {
    /*
    const { a, b, operation} = this.state;
    if(operation === '') {
      if(a === 0 && digit !== 0) {
        this.setState({ a: digit, displayed: a });
      } else if(Number.isInteger(a)) {
        this.setState({ a: a * 10 + digit, displayed: a });
      } else {
        this.setState({ a: parseFloat(a.toString().concat(digit)), displayed: a });
      }
    } else {
      if(b === 0 && digit !== 0) {
        this.setState({ b: digit, displayed: b });
      } else if(Number.isInteger(b)) {
        this.setState({ b: b * 10 + digit, displayed: b });
      } else {
        this.setState({ b: parseFloat(a.toString().concat(digit)), displayed: b });
      }
    }
    */
    console.log("gucci mane");
  }

  render() {
    const methods = {
      addDigit: this.addDigit.bind(this),
    };
    return (
      <div>
        {this.state.displayed}
        <Buttons methods={methods}/>
      </div>
    );
  }
}

export default Calculator;