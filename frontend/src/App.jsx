import React from 'react'
import {Routes,Route} from "react-router-dom"
import MoodMate from './components/MoodMate'
import SignUp from './components/SignUp/SignUp'
import Login from "./components/Login/Login"
import { Navigate } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/app' element={<MoodMate/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
