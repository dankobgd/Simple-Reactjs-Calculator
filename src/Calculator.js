import React, { useState } from 'react'
import AutoScalingText from './AutoScalingText'


function Calculator() {
    const [displayValue, setDisplayValue] = useState('0')
    const [value, setValue] = useState(null)
    const [operator, setOperator] = useState(null)
    const [waitingForOperand, setWaitingForOperand] = useState(false)


    // Append Digit
    const inputDigit = digit => {
      if (waitingForOperand) {
        setDisplayValue(`${digit}`)
        setWaitingForOperand(false)
      } else {
        setDisplayValue(displayValue === '0' ? `${digit}` : `${displayValue}${digit}`)
      }
    }

    // Append Dot
    const inputDot = () =>{
      if (waitingForOperand) {
        setDisplayValue('.')
        setWaitingForOperand(false)
      } else if (!displayValue.includes('.')) {
        setDisplayValue(`${displayValue}.`)
        setWaitingForOperand(false)
      }
    }

    // Toggle Sign
    const toggleSign = () => {
      setDisplayValue()
      setDisplayValue(displayValue.charAt(0) === '-' ? displayValue.slice(1) : `-${displayValue}`)
    }

    // Calculate Percentage
    const percentage = () => {
      const val = parseFloat(displayValue)
      setDisplayValue(`${val / 100}`)
    }

    // Perform Calculation Operations
    const performOperation = nextOperator => {
      const nextValue = parseFloat(displayValue)

      const operations = {
        '/': (prevValue, nextValue) => prevValue / nextValue,
        '*': (prevValue, nextValue) => prevValue * nextValue,
        '+': (prevValue, nextValue) => prevValue + nextValue,
        '-': (prevValue, nextValue) => prevValue - nextValue,
        '=': (prevValue, nextValue) => nextValue
      }

      if (!value) {
        setValue(nextValue)
      } else if (operator) {
        const currentValue = value || 0
        const computedValue = operations[operator](currentValue, nextValue)

        setValue(computedValue)
        setDisplayValue(`${computedValue}`)
      }

      setWaitingForOperand(true)
      setOperator(nextOperator)
    }


    // Clear calculator display
    const clearDisplay = () => {
      setDisplayValue('0')
    }


    return (
      <div className="calculator">
        <div className="display">
          <AutoScalingText>{displayValue}</AutoScalingText>
        </div>
        <div className="key" onClick={() => inputDot()}>●</div>
        <div className="key digit" onClick={() => inputDigit(0)}>0</div>
        <div className="key digit" onClick={() => inputDigit(1)}>1</div>
        <div className="key digit" onClick={() => inputDigit(2)}>2</div>
        <div className="key digit" onClick={() => inputDigit(3)}>3</div>
        <div className="key digit" onClick={() => inputDigit(4)}>4</div>
        <div className="key digit" onClick={() => inputDigit(5)}>5</div>
        <div className="key digit" onClick={() => inputDigit(6)}>6</div>
        <div className="key digit" onClick={() => inputDigit(7)}>7</div>
        <div className="key digit" onClick={() => inputDigit(8)}>8</div>
        <div className="key digit" onClick={() => inputDigit(9)}>9</div>
        <div className="key function" onClick={() => clearDisplay()}>C</div>
        <div className="key function" onClick={() => toggleSign()}>+/-</div>
        <div className="key function" onClick={() => percentage()}>%</div>
        <div className="key operator" onClick={() => performOperation('/')}>÷</div>
        <div className="key operator" onClick={() => performOperation('*')}>x</div>
        <div className="key operator" onClick={() => performOperation('-')}>-</div>
        <div className="key operator" onClick={() => performOperation('+')}>+</div>
        <div className="key operator" onClick={() => performOperation('=')}>=</div>
      </div>
    )
}


export default Calculator
