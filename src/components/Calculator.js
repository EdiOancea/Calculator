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

  setBinaryOperator(operator) {
    if (operator !== '') {
      this.equalityHandler();
    } 
    this.setState({ operation: operator });
  }

  clear() {
    this.setState({ a: '0', b: '0', operation: '', displayed: '0' });
  }
  
  addDigit(digit) {
    const { a, b, operation } = this.state;
    if (operation === '') {
      if (a === '0') {
        this.setState({ a: digit, displayed: digit });
      } else if (a.length < 9) {
        this.setState({ a: a.concat(digit), displayed: a.concat(digit) });
      }
    } else {
      if (b === '0') {
        this.setState({ b: digit, displayed: digit });
      } else if (b.length < 9) {
        this.setState({ b: b.concat(digit), displayed: b.concat(digit) });
      }
    }
  }

  equalityHandler() {
    const { a, b, operation } = this.state;
    if (operation !== '') {
      if (a.slice(-1) === '.') {
        this.setState({ a: a.slice(0, -1) });
      }
      if (b.slice(-1) === '.') {
        this.setState({ b: b.slice(0, -1) });
      }
      const toBeDisplayed = eval(`${parseFloat(a)} ${operation} ${parseFloat(b)}`).toString();
      this.setState({ 
        displayed: toBeDisplayed,
        a: toBeDisplayed,
        b: '0',
        operation: '',
      });
    }
  }

  reverseSign() {
    const { a, b, operation } = this.state;
    if (operation === '') {
      if (a[0] !== '0') {
        if( a[0] !== '-') {
          this.setState({ a: '-'.concat(a), displayed: '-'.concat(a) })
        } else {
          this.setState({ a: a.substring(1, a.length), displayed: a.substring(1, a.length) })
        }
      }
    } else {
      if (b[0] !== '0') {
        if( b[0] !== '-') {
          this.setState({ b: '-'.concat(b), displayed: '-'.concat(b) })
        } else {
          this.setState({ b: b.substring(1, b.length), displayed: b.substring(1, b.length) })
        }
      }
    }
  }

  addComa() {
    const { a, b, operation } = this.state;
    if (operation === '' && !a.includes('.')) {
      this.setState({ a: a.concat('.'), displayed: a.concat('.') });
    } else if (operation !== '' && !b.includes('.')) {
      this.setState({ b: b.concat('.'), displayed: b.concat('.') });
    }
  }

  render() {
    return (
      <div>
        <Display text={this.state.displayed}/>
        <Buttons 
          clear={() => this.clear()} 
          addDigit={digit => this.addDigit(digit)}
          equalityHandler={() => this.equalityHandler()}
          reverseSign={() => this.reverseSign()}
          addComa={() => this.addComa()}
          setBinaryOperator={operator => this.setBinaryOperator(operator)}
        />
      </div>
    );
  }
}

export default Calculator;

