import "./Login.css"
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [errMsg , setErrMsg] = useState(null)
    async function handleLoginBtn(){
      const loginCredentials = {
        email : email,
        password : password
      }
      const data = await fetch("http://127.0.0.1:8000/api/login" , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(loginCredentials)
      })
      const response = await data.json()
      setErrMsg(response.msg)
      if (response.msg == "Success"){
        navigate("/app")
      }
    }
  return (
    <div className='mainDiv'>
        <header className='headerText'>
            <h1>Login</h1>
            <p>WELCOME BACK! Let's get started again</p>
        </header>
        <span className='signUpDiv'>
            <label htmlFor='email'>EMAIL</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} id="email" name='email' type='email' placeholder='enter your email......'/>
            <label htmlFor='password'>PASSWORD</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} id="password" name='password' type='password' placeholder='enter your pass......'/>
            <button onClick={handleLoginBtn} className='loginBtn'>LOGIN</button>
            <p style={{"color" : "purple"}}>{errMsg}</p>
            <Link to="/signup">Haven't signed up? Sign In Here</Link>
        </span>
    </div>
  )
}
export default Login