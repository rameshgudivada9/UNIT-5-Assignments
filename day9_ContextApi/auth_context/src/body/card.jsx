import {AuthContext} from "../context/AuthContext";
import { useContext } from "react";


export const Card=()=>{

const {handleChange} = useContext(AuthContext)


    return <div style={{
        width:"20%",
        backgroundColor:"teal",
        border:"1px solid teal",
        height:"200px",
        margin:"10px",
        textAlign:"center"
    }}>
        <button onClick={()=>{
           handleChange()
        }} >Go to log in</button>
    </div>
}