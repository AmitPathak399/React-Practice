import './App.css';

import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [input, setInput] = useState('0')
  const calculatResult = (input) =>{
     try{
      const operators = ['+','-','*','/'];
      let operator = null;

      for(let i=0;i<input.length;i++){
        if(operators.includes(input[i])){
          operator = input[i];
          break;
        }
      }
      if(!operator){
        setInput(parseFloat(input).toString())
        return;
      }
      const [operand1, operand2] = input.split
      (operator).map(parseFloat);
      let result;

      switch(operator) {
        case '+':
        result = operand1 + operand2;
        break;
        case '-':
        result = operand1 - operand2;
        break;
        case '*':
        result = operand1 * operand2;
        break;
        case '/':
        result = operand1 / operand2;
        break;
        default:
          throw new Error('Invalid Operator')
      }
      setInput(result.toString());
     }
     catch (errr){
      setInput('!Oppps')
     }
  }

  const handleClick = (value) =>{
    if(value==='C'){
      setInput('')
    }else if (value === '<'){
      setInput(input.slice(0,-1));
    }else if (value === '='){
      calculatResult(input)
    }
    else{
      setInput((preValue) => preValue + value)
    }
  }
  return (
    <div className='container'>
      {/* <h1>Calculater</h1> */}
      <div className='calc'>
        <h2 id='input'>{input}</h2>
        <div>
          <button onClick={()=>handleClick('C')}>C</button>
          <button onClick={()=>handleClick('<')}>&lt;</button>
          <button onClick={()=>handleClick('%')}>%</button>
          <button onClick={()=>handleClick('/')}>/</button>
        </div>
        <div>
          <button onClick={()=>handleClick('7')}>7</button>
          <button onClick={()=>handleClick('8')}>8</button>
          <button onClick={()=>handleClick('9')}>9</button>
          <button onClick={()=>handleClick('*')}>*</button>
        </div>
        <div>
          <button onClick={()=>handleClick('4')}>4</button>
          <button onClick={()=>handleClick('5')}>5</button>
          <button onClick={()=>handleClick('2')}>6</button>
          <button onClick={()=>handleClick('-')}>-</button>
        </div>
        <div>
          <button onClick={()=>handleClick('1')}>1</button>
          <button onClick={()=>handleClick('2')}>2</button>
          <button onClick={()=>handleClick('3')}>3</button>
          <button onClick={()=>handleClick('+')}>+</button>
        </div>
        <div>
          <button onClick={()=>handleClick('0')}>0</button>
          <button onClick={()=>handleClick('00')}>00</button>
          <button onClick={()=>handleClick('.')}>.</button>
          <button onClick={()=>handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
