import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom"
import axios from 'axios';
import { Signup } from './Signup';

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')



  // eventhandler for login
  const addLoginHandler = async (e) => {
    e.preventDefault()
    console.log('login function hits');
    const loginDetails = {
      username: user,
      password: password,

    }
    console.log('regsiter', loginDetails)
    axios.post(`/api/register`, loginDetails)
      // need add some logic for login check
      .then((data) => {

      });

    console.log(user)
  }

  return (
    <div>
      <form action="/api/login" method="POST" onSubmit={addLoginHandler} >
        <div>

          <h1>Login</h1>

          <div class="form-input-material">
            <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
          </div>

          <div>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit">Login</button>

          <div>
            <Link to="/Signup">Don't have a account? Click here to Register</Link>
          </div>

        </div>
      </form>
    </div>
  )
}