import './App.css';
import {useState,useEffect} from "react";
import {Todo} from "./components/Todo"
function App() {

  const [todos,setTodos]=useState([]);

fetch("http://localhost:8080/todos").then(d=>d.json()).then((data)=>{(console.log(data))})


  return (
    <div className="App">
     {todos.map(todo=><div>{todo.title}</div>)}
    </div>
  );
}

export default App;
