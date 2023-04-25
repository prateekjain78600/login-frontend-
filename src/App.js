import React from 'react'
import SignUp from './Components/SingUp'
import Login1 from './Components/Login1'
import UserDetails from './Components/UserDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>
      <div className='container'>
     <Routes>
      <Route path='/'>
        <Route index element={<Login1 />} />
      </Route>
      <Route path='/signup' element={<SignUp/>}/>    
      <Route path='/' element={<Login1/>}/>
      <Route path='/UserDetails' element={<UserDetails/>}/>    
      </Routes> 
    {/* <SignUp/> */}
    {/* { <Login1/>} */}
    </div>
    </> 
  )}