import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"


export const UsersDetails=()=>{

    const {id}=useParams();

    const [user,setUser]=useState({});

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{
            setUser(data.data);
        })
    },[]);

return (
<div> 
    <div><img src={user.avatar} alt="image" /></div>
    <div>user id:{id}</div>
    <div>First name:{user.first_name}</div>
    <div>last name:{user.last_name}</div>

</div>

)
       
}