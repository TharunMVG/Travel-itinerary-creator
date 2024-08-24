import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function sub(e) {
    e.preventDefault();
    console.log("Submitting form...");

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        name,
        password,
      });

      console.log("Server response:", response.data);

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "not exist") {
        alert("Signup successful!");
       
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  }

  return (
    <div id='signupbg'>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />

        <button type="button" onClick={sub}>
          Sign Up
        </button>

        <p>
          Already have an account? <Link to={"/login"} style={{ textDecoration: "none" }}>Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
