import React from 'react'
import { useState } from 'react';
import {useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/authContext.js'
import axios from 'axios';


export default function Login() {

  // const {currentUser} =useContext(AuthContext);
  
  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  })
  const [error,setError] =useState(null)
  
  const navigate=useNavigate();
  
  const {login} = useContext(AuthContext);
  
  const handleChange = e =>{
    setInputs(prev=>({...prev , [e.target.name] : e.target.value}))
  } 
  const handleSubmit = async e =>{
    e.preventDefault();
    try{
      await login(inputs)
      
      navigate("/");
        
    }catch(err){
      setError(err.response.data);
    }
  }
  return (
    <div className='auth'>  
      <h1> Login </h1>
      <form>
        <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
        <input required type="password" placeholder="password" name="password"  onChange={handleChange}/>

        {error && <p> {error} </p>}
        <button onClick={handleSubmit}>Login</button>
        <span> Don't have an account? <Link to='/register' >Register</Link></span>
      </form>
    </div>
  )
}
