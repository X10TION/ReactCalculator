
import './App.css';
import { useState, useEffect} from 'react'
import { NumericFormat } from 'react-number-format';


function App() {

  //  use state here 
const [ preState, setPreState] = useState("")
const [ curState, setcurState] = useState("")
const [ input, setInput] = useState("0")
const [operator, setOperator] = useState(null)
const [ total, setTotal] = useState(false)


const inputNum = (e)=> {
  if(curState.includes(".") && e.target.innerText === ".") return
  if(total){
    setPreState("")
  }
  curState ? setcurState((pre) => 
  pre + e.target.innerText) :
   setcurState(e.target.innerText)
   setTotal(false)
}
useEffect(() => {
    setInput(curState)
},[curState])

useEffect(() => {
  setInput("0")
},[])



const operatorType = (e)=> {
  setTotal(false)
  setOperator(e.target.innerText)
  if(curState === "") return
  if(preState !== ""){
    equals()
  }setPreState(curState)
  setcurState("")
}
const equals = (e)=> {
  if(e?.target.innerText === "="){
  setTotal(true)
  }
let cal
switch (operator) {
  case "/":
    cal = String(parseFloat(preState)/ parseFloat(curState)
    )
    break;
  case "+":
    cal = String(parseFloat(preState) + parseFloat(curState)
    )
    break
  case "-":
    cal = String(parseFloat(preState) - parseFloat(curState)
      )
      break;
   case "x":
        cal = String(parseFloat(preState) * parseFloat(curState)
        )
        break;
  default:
    return
}
setInput("")
    setPreState(cal)
    setcurState("")
}
const minutPlus = ()=> {
  if(curState.charAt(0) == "-"){
    setcurState(curState.substring(1))
  }else{
    setcurState("-"+curState)
  }
}
const percent = ()=> {}
const reset = () => {
  setPreState("")
  setcurState("")
  setInput("")
}



  return (
    <div className="container">
      <div className='wrapper'>
        <div className='screen'>{input !== "" || input == "0" ? 
      <NumericFormat value={input} displayType={"text"} thousandSeperator={true}/> :
      <NumericFormat value={preState} displayType={'text'} thousandSeparator={true} />  
      }</div>
        <div className='btn light-gray' onClick={reset}>AC</div>
        <div className='btn light-gray' onClick={percent}>%</div>
        <div className='btn light-gray' onClick={minutPlus}>+/-</div>
        <div className='btn light-gray' onClick={operatorType}>/</div>
        <div className='btn' onClick={inputNum}>7</div>
        <div className='btn' onClick={inputNum}>8</div>
        <div className='btn' onClick={inputNum}>9</div>
        <div className='btn orange' onClick={operatorType}>X</div>
        <div className='btn' onClick={inputNum}>4</div>
        <div className='btn' onClick={inputNum}>5</div>
        <div className='btn' onClick={inputNum}>6</div>
        <div className='btn orange' onClick={operatorType}>+</div>
        <div className='btn' onClick={inputNum}>3</div>
        <div className='btn' onClick={inputNum}>2</div>
        <div className='btn' onClick={inputNum}>1</div>
        <div className='btn orange' onClick={operatorType}>-</div>
        <div className='btn zero' onClick={inputNum}>0</div>
        <div className='btn' onClick={inputNum}>.</div>
        <div className='btn' onClick={equals}>=</div>
      </div>
     
    </div>
  );
}

export default App;
