import React, { Component } from 'react';


class Calculator extends Component {
  state = {
    displayValue: '0',
    value: null,
    operator: null,
    waitingForOperand: false
  }


  // Append Digit
  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state;
    
    if (waitingForOperand) {
      this.setState({
        displayValue: `${digit}`,
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? `${digit}` : `${displayValue}${digit}`
      })
    }
  }


  // Append Dot
  inputDot() {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: '.',
        waitingForOperand: false
      })
    } else if (!displayValue.includes('.')) {
      this.setState({
        displayValue: `${displayValue}.`,
        waitingForOperand: false
      })
    }
  }


  // Toggle Sign
  toggleSign() {
    const { displayValue } = this.state;
    this.setState({ 
      displayValue: displayValue.charAt(0) === '-' ? displayValue.slice(1) : `-${displayValue}`
    })
  }


  // Calculate Percentage 
  percentage() {
    const { displayValue } = this.state;
    const val = parseFloat(displayValue)
    
    this.setState({
      displayValue: `${val / 100}`
    })
  }


  // Perform Calculation Operations
  performOperation(nextOperator) {
    const { displayValue, operator, value } = this.state;
    const nextValue = parseFloat(displayValue);

    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue
    }

    if (!value) {
      this.setState({
        value: nextValue
      })
    } else if (operator) {
      const currentValue = value || 0;
      const computedValue = operations[operator](currentValue, nextValue)

      this.setState({
        value: computedValue,
        displayValue: `${computedValue}`
      })
    }    

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }


  // Clear calculator display  
  clearDisplay () {    
    this.setState({ displayValue: '0' })
  }


  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="key" onClick={() => this.inputDot()}>●</div>        
        <div className="key digit" onClick={() => this.inputDigit(0)}>0</div>
        <div className="key digit" onClick={() => this.inputDigit(1)}>1</div>
        <div className="key digit" onClick={() => this.inputDigit(2)}>2</div>
        <div className="key digit" onClick={() => this.inputDigit(3)}>3</div>
        <div className="key digit" onClick={() => this.inputDigit(4)}>4</div>
        <div className="key digit" onClick={() => this.inputDigit(5)}>5</div>
        <div className="key digit" onClick={() => this.inputDigit(6)}>6</div>
        <div className="key digit" onClick={() => this.inputDigit(7)}>7</div>
        <div className="key digit" onClick={() => this.inputDigit(8)}>8</div>
        <div className="key digit" onClick={() => this.inputDigit(9)}>9</div>
        <div className="key function" onClick={() => this.clearDisplay()}>C</div>
        <div className="key function" onClick={() => this.toggleSign()}>+/-</div>
        <div className="key function" onClick={() => this.percentage()}>%</div>
        <div className="key operator" onClick={() => this.performOperation('/')}>÷</div>
        <div className="key operator" onClick={() => this.performOperation('*')}>x</div>
        <div className="key operator" onClick={() => this.performOperation('-')}>-</div>
        <div className="key operator" onClick={() => this.performOperation('+')}>+</div>
        <div className="key operator" onClick={() => this.performOperation('=')}>=</div>
      </div>
    );
  }
}

export default Calculator;
