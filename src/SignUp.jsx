import React from 'react'
import { createContext, useEffect, useState } from 'react';

import {Link} from 'react-router-dom'
export const context=createContext()
function SignUp() {
    const [entry,setentry]=useState(false)
    const [detail,setDetail]=useState({
        name:'',
        email:'',
        password:''
      })

      const handleChange=(e)=>{
        const n=e.target.name
        const v=e.target.value
        setDetail((old)=>{
          return {...old,[n]:v}
        })
      }

      const handleClick=()=>{
        localStorage.setItem('setDetail',JSON.stringify(detail))

         if(detail.name.length>0 && detail.email.length>0){
             setentry(true)
         }
      }
    
    return (
        <div className='outerBox'>
    <div className='box'>
        <h1 className="text-center mt-5">SIGN UP</h1>
        <div class="form-floating mb-3 w-100">
        <label for="floatingInput ">UserName</label>
        <input type="text" name="name"  onChange={handleChange} class="form-control"  placeholder="username" />
        </div>
        <div class="form-floating w-100">
        <label for="floatingPassword">Email</label>
        <input type="email" name="email" onChange={handleChange} class="form-control"  placeholder="Email" />  
        </div>
        <div class="form-floating w-100">
        <label for="floatingPassword">Password</label>
        <input type="text"  name="password" onChange={handleChange} class="form-control"  placeholder="Password" />  
        </div>
         <Link to={entry ? '/login' : '/'}>  <button  className='btn btn-lg btn-primary  mt-3 '   onClick={handleClick}> SIGN UP</button>  </Link>
         </div>
        </div>
    )
}

export default SignUp
