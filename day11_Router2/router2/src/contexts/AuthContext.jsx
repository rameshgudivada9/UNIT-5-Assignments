import {  createContext, useState } from "react";

 
export const AuthContext=createContext();

export const AuthContextProvider=({Children})=>{

    const [isAuth,setIsAuth]=useState(true)

    const handleAuth=(state)=>{
        setIsAuth(state)
    }

return <AuthContext.Provider value={{isAuth,handleAuth}} >{Children}</AuthContext.Provider>

}