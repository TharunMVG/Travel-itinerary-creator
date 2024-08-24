import React from 'react'
import {Link,useNavigate}from 'react-router-dom'
import axios from 'axios'
import '../styles/land.css'
import thomas from '../assets/thomas.png'

function Land()
{
    return (
        <div id="landbg">
      <div class="travel">
        <h1 id="word">You'll never <br /> travel without our <br /> trip planner again!</h1>
        <p id="apple">Build, organize, and map your <br />itineraries in a free travel <br />app designed for vacations & road trips!!</p>
      </div>

      <div className="button-container">
        
        <Link style={{textDecoration:"none"}} to={"/signup"}><button>SIGNUP</button></Link>
        <Link style={{textDecoration:"none"}} to={"/login"}><button>LOGIN</button></Link>
        
        
      </div>
    </div>
    )
}

export default Land