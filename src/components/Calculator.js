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
  
  equalityHandler() {
    const { a, b, operation } = this.state;
    if (operation !== '') {
      const toBeDisplayed = eval(`${parseFloat(a)} ${operation} ${parseFloat(b)}`);
      this.setState({ 
        displayed: toBeDisplayed,
        a: toBeDisplayed,
        b: '0',
        operation: '',
      });
    }
  }

  render() {
    return (
      <div>
        <Display text={`${this.state.displayed}`}/>
        <Buttons 
          equalityHandler={() => this.equalityHandler()}
          clear={()=> this.clear()}
        />
      </div>
    );
  }
}

export default Calculator;

