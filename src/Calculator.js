import React, { Component } from 'react';


class Calculator extends Component {
  state = {
    displayValue: '0'
  }

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="key">●</div>        
        <div className="key digit">0</div>
        <div className="key digit">1</div>
        <div className="key digit">2</div>
        <div className="key digit">3</div>
        <div className="key digit">4</div>
        <div className="key digit">5</div>
        <div className="key digit">6</div>
        <div className="key digit">7</div>
        <div className="key digit">8</div>
        <div className="key digit">9</div>                
        <div className="key function">C</div>
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
