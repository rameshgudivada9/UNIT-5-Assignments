import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";



export const PrivateComponent=({children})=>{


    const {isAuth}=useContext(AuthContext)

    if(!isAuth){
        return <Navigate to="/login" replace={false}> </Navigate>
      }

      return children;

}