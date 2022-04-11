import { useState } from "react"

export const TodoInput=({getdata})=>{
    const [text,setText]=useState("")
    return <div>
        <input onChange={(e)=>{
// console.log(e.target.value)
setText(e.target.value)
        }} type="text" placeholder="WRITE SOMETHING"/> 
        <button onClick={()=>{
            getdata(text)
        }}>+</button>
    </div>
}