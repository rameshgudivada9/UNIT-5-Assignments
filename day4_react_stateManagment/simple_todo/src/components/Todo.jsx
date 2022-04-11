import { TodoInput } from "./TodoInput";
import {useState}from "react";
import "./Todo.css"

function Todo(){
    const [todoList,setTodoList]=useState([]);

    const getdata=(todo)=>{
        setTodoList([...todoList,todo])
    }
    return <div className="main">
        {todoList.map((e)=>(
          <div>{e}</div>
        ))}
        <TodoInput getdata={getdata}/>
    </div>

}
export {Todo}