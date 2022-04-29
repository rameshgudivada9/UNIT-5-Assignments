import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addTodo } from "../Redux/action";

export const Todo=()=>{

    const todos=useSelector(store=>store.todos);

    const [text,setText]=useState("");
    const dispatch=useDispatch();

    const handleAdd=()=>{
        dispatch(addTodo({
            title:text,
            status:false
        }))
    }

    return (
        <div>
<input type="text" onChange={(e)=>setText(e.target.value)}/>

<button onClick={handleAdd}>ADD TO DO</button>

{todos.map((t)=>(<div key={t.title}>{t.title}</div>))}
        </div>
    )
}