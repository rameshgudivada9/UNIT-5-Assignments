import {AuthContext} from "../context/AuthContext";
import { useContext } from "react";

export const Navbar=()=>{
    const {enter}=useContext(AuthContext)
    

    return <nav style={{
        display:"flex",
        justifyContent:"end",
        border:"1px solid red",
        padding:"10px",
        fontSize:"25px",
        margin:"10px"

    }} >
        Login:{enter=== "success" ? "in" : "out"}
    </nav>

}