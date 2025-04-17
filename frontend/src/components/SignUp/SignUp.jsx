import React from 'react'
import "./SignUp.css"
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
function SignUp() {
    const navigate = useNavigate()
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [msg,setMsg] = useState(null)
    async function handleSignUp(){
        const signupCredentials = {
            email : email,
            password : password
        }
        const data = await fetch("http://127.0.0.1:8000/api/signup",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(signupCredentials)
        })
        const response = await data.json()
        setMsg(response.message)
        if(response.message == "Successful"){
            navigate("/app")
        }
    }
  return (
    <div className='mainDiv'>
        <header className='headerText'>
            <h1>Sign Up</h1>
            <p>Sign Up with your credentials and start your Mood Journaling</p>
        </header>
        <span className='signUpDiv'>
            <label htmlFor='email'>EMAIL</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} id="email" name='email' type='email' placeholder='enter your email......'/>
            <label htmlFor='password'>PASSWORD</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} id="password" name='password' type='password' placeholder='enter your pass......'/>
            <button onClick={handleSignUp} className='loginBtn'>Sign Up</button>
            <p style={{"color" :  "purple"}}>{msg}</p>
            <Link to="/login">Already Signed up? Login Here</Link>
        </span>
    </div>
  )
}

export default SignUp