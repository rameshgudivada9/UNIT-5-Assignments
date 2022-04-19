import styled from "styled-components"

// export const Button=({children,onClick})=>{
//     return <button onClick={onClick} className= "btn">{children}</button>
    
// }

const Button=styled.button `
margin: 5px;
background-color:${(props)=>props.theme==="light" ? "yellow":"#FF4742"};
border: 1px solid #FF4742;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;

&:hover{
    background-color:white;
    color:#FF4742;
}

`;

export  {Button}