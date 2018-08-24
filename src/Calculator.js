import React, { Component } from 'react';


class Calculator extends Component {
  state = {
    displayValue: '0'
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
        <div className="key function">+/-</div>
        <div className="key function">%</div>        
        <div className="key operator">÷</div>
        <div className="key operator">x</div>
        <div className="key operator">-</div>
        <div className="key operator">+</div>
        <div className="key operator">=</div>
      </div>
    );
  }
}

export default Calculator;
