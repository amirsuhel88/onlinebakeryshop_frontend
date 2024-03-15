//import logo from './logo.svg';
import './App.css';
//import Login from './Login';
import Login from './pages/Login/Login.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup/Signup.js';
import Home from './pages/Home/Home.js'


function App() {
  return (
    <BrowserRouter>   
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/home' element={<Home/>}> </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;