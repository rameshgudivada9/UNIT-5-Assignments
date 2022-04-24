import { useContext } from "react"
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext"


export const Login=()=>{

    const {handleAuth}=useContext(AuthContext);

    const navigate=useNavigate();

    return <div>
        <input type="text" placeholder="user name" />
        <input type="text" placeholder="enter password" />
        <button onClick={()=>{
// making network req Post req.in/api/login with email and pass

// token

// change state of isAuth to true. 
            handleAuth(true);
            navigate("/")
        }}>
            submit</button>

        </div>
}