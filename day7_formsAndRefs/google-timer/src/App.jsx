import './App.css';
import {useState,useRef, useEffect} from "react";
function App() {
  const[counter,setCounter]=useState(10);
  const counterRef=useRef(null);

  useEffect(()=>{
    counterRef.current=  setInterval(()=>{
      setCounter((r)=>r+1)
    },1000)
  },[])

  
  return (
    <div className="App">
  <h3>counter:{counter}</h3>

  <button onClick={()=>{
  clearInterval(counterRef.current)
  }} >pause</button>


<button onClick={()=>{
  counterRef.current=  setInterval(()=>{
    setCounter((r)=>r+1)
  },1000)


}} >Start</button>

<button onClick={()=>{

clearInterval(counterRef.current);
setCounter(0);

}} >Reset</button>
    </div>
  );
}

export default App;

// what useRef do?
// 1.store the value , and do not lose it,when component is re-rendaring
// 2.changein this value,should not cause re-rendar
