import { Link } from "react-router-dom"

export const Navbar=()=>{

    // const nav=[{title:"HOME",to:"/"},{title:"ABOUT US",to:"/about"},{title:"USERS",to:"/users"}]
    

    return <nav style={{
        display:"flex",
        justifyContent:"space-between",
        border:"1px solid red",
        padding:"10px",
        fontSize:"25px",
        margin:"10px"

    }} >

        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/users">USERS</Link>
{/* 
        {nav.map((e,i)=>(
            <Link key={i} to={e.to} >

                {e.title}

            </Link>
        ))} */}
    </nav>

}