import './App.css';
import { addCount } from './Redux/action';
import {useDispatch,useSelector} from 'react-redux';

function App() {
  const dispatch=useDispatch()

  const counter=useSelector((store)=>store.counter)

  // const state=store.getState();

  // console.group(store.getState())
  return (
    <div className="App">

      <h3>COUNTER:{counter}</h3>
      <button onClick={()=>{
        dispatch(addCount(1))
      }}>ADD 1</button>
    
    </div>
  );
}

export default App;
