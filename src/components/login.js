import React from 'react'
import {Link,useNavigate}from 'react-router-dom'
import axios from 'axios'
import '../styles/login.css'


function Login()
{
    const history=useNavigate();

    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const [name,setName]=React.useState("")

    

    async function sub(e)
    {
      e.preventDefault()

      try
      {
        await axios.post("http://localhost:5000/",
        {
          email,name,password
        })
        
        .then(res=>
          {
            console.log(res)
            if (res.data=="exist")
            {
         
              
              history('/search')
             
            }
            else if (res.data=="not exist")
            {
              alert("Please create an account first")
            }
            

          })
          .catch(e)
          {
            console.log(e)
          }


      }
      catch(e)
      {
        console.log(e)
      }
    }






    return (<div id='loginbg'>
    <form class="login" action="/submit_signup" method="post">
        <label for="email">Email:</label>
        <input type="text" id="username" name="username" onChange={(e)=>{setEmail(e.target.value)}} required/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}required/>
        <p>Don't have an account? <Link to={"/signup"} style={{textDecoration:"none"}}>Signup</Link></p>
        <button type="submit" onClick={sub}>LOG IN</button>
        </form>
    </div>)
}

export default Login
