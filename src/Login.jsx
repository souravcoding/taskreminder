import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import {context} from './SignUp'

const SignupValue=JSON.parse(localStorage.getItem('setDetail'))

function Login() {
    const use=useContext(context)
    const [entry,setEntry]=useState(false)
    const [det,setDetail]=useState({
        name:'',
        password:''
      })

      
    

    const handleChange=(e)=>{
        const n=e.target.name
        const v=e.target.value
        setDetail((old)=>{
          return {...old,[n]:v}
        })
      }

      
      const handle=(e)=>{
        localStorage.setItem('setDet',JSON.stringify(det))
            if(det.name==SignupValue.name ){
                console.log(true);
                setEntry(true)
            }else{
                alert(' Please Use the UserName and Password you Used of Sign In ')
            }
        }  

        const clearItem=()=>{
            localStorage.clear()
        }


    return (
        <div className="outerBox">

        <div className='box'>
        <h1 className="text-center mt-5">LOGIN</h1>
        <div class="form-floating mb-3 w-100">
        <label for="floatingInput ">UserName</label>
        <input type="text" name="name"  onChange={handleChange} class="form-control"  placeholder="username" />
        </div>
        <div class="form-floating w-100">
        <label for="floatingPassword">Password</label>
        <input type="text" name="password" onChange={handleChange} class="form-control"  placeholder="Password" />  
        </div>
         <Link to={entry ? '/home' : '/login'}>  <button  className='btn btn-lg btn-primary  mt-2'   onClick={handle}>  LOGIN</button>  </Link>
         <Link to='/'><button  className='btn btn-lg btn-dark mt-3 ' onClick={clearItem}>Create New Account</button>  </Link>

         </div>
        </div>
    )
}

export default Login
