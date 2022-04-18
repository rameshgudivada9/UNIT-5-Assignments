import {useState} from "react";

export const Form=()=>{

    const [formData,setFormData]=useState({
        // username:"",
        // age:""
    });

    const handleChange=(e)=>{
      const{id,value}=e.target

        setFormData({
            ...formData,
            [id]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
      console.log(formData);
      fetch("http://localhost:8080",{method:"posts",body:JSON.stringify(formData)})
    }

    return (
    <form onSubmit={handleSubmit} >
        <input onChange={handleChange} value={formData.username} type="text" placeholder="enter username" id="username" />
        <input onChange={handleChange} value={formData.age} type="Number" placeholder="enter age" id="age" />
        <input onChange={handleChange} value={formData.address} type="text" placeholder="enter address" id="address" />
        <input type="submit" value="submit" />

    </form>
    )
}