import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import {Routes,Route}from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { UsersList } from './components/UsersList';
import {UsersDetails} from './components/UsersDetails';
import {PrivateComponent} from './components/PrivateComponent';
import { Login } from './components/Login';



function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home></Home>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/users" element={<PrivateComponent> <UsersList/></PrivateComponent>} ></Route>
        <Route path="/users/:id" element={ <UsersDetails/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>

      </Routes>
   
    </div>
  );
}

export default App;
