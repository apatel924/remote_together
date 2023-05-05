import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom"
import { Login } from './Login';
import axios from 'axios';

export function Signup() {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // eventhandler for login
  const addRegisterHandler = (e) => {
    e.preventDefault()
    console.log('register function hits from front end');
    const regsiter = {
      username: user,
      password: password,
      email: email,
    }
    console.log('regsiter from front end', regsiter)
    axios.post(`/api/register`, regsiter)
      .then((data) => {
        console.log('data from addregisterhandle', data)
        console.log('success for creating user?')
      });
  }

  return (
    <div>
      <form action="/api/register" onSubmit={addRegisterHandler} >
        <h1>Register</h1>

        <div>
          <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
        </div>

        <div>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit">Register</button>

        <div>
          <Link to="/Login">Already have an account?</Link>
        </div>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </form>
    </div>
  )
}