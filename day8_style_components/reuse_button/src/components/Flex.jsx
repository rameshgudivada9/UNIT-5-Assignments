import styled from "styled-components";

const Flex=styled.div`
display:flex;
justify-content:center;


& div:nth-child(even){
color:blue;
margin-left:10px;
}

`;

export {Flex}