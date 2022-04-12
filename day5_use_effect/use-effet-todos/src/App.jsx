import './App.css';
import {useState} from "react";
import {Todo} from "./components/Todo"
function App() {

const [show,setShow]=useState(true)

  return (
    <div className="App">
       {show?<Todo/>:null}
       <button onClick={()=>{
         setShow(!show)
       }}>DELETE</button>
    </div>
  );
}

export default App;
