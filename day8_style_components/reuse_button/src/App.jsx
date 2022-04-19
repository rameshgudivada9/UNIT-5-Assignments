import './App.css';
import{useState} from "react";
import { Button } from './components/Button';
import{Flex} from "./components/Flex"


function App() {

  const [theme,setTheme]=useState("dark")

  return (
    <div className="App">
      <h3>Theme:{theme}</h3>
     <Button 
     onClick={()=>{
       setTheme(theme==="light"? "dark":"light")
     }} 
     >Primary button</Button>

     <Button variant="hollow" theme={theme} children="default button" />

     <Button children="dashed button" />

     <Flex>
       <div>Text Button</div>
       <div>Link Button</div>
    
     </Flex>
    
    </div>
  );
}

export default App;
