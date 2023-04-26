import React, { useContext, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom"
import axios from 'axios';
import { Signup } from './Signup';
import { AuthContext } from '../providers/authProvider';

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const {login} = useContext(AuthContext)

  //use effect here whenever user changes add it to the top. maybe even add usecontext if we need for chat box

  // eventhandler for login
  const addLoginHandler = async (e) => {
    e.preventDefault()
    user && login(user, password);
    console.log('login function hits from front end');

    // const loginDetails = {
    //   username: user,
    //   password: password,

    // }
    // console.log('login from front end', loginDetails)
    // axios.get(`/api/login`, loginDetails)
      // need add some logic for login check or just leave it hardcoded?
      // can just add a session cookie with the below but need to add a GET request with :id
      // res.cookie('user_id', req.params.id)
      // but will this work for single page app? would it better to just set state with usecontext?
      // .then((data) => {
      //   console.log('successfully logged in')
      //   console.log('data', data)
      //   setUser(user)
      //   console.log('user from the front end after login',user)
      // });

    console.log('user', user)
  }

  return (
    <div>
      <form action="/api/login" method="GET" onSubmit={addLoginHandler} >
        <div>
         
          <h1>Login</h1>
  
          <div>
            <input value={user} type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
          </div>

          <div>
            <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit">Submit</button>

          <div>
            <Link to="/Signup">Don't have a account? Click here to Register</Link>
          </div>

        </div>
      </form>
    </div>
  )
}