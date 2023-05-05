import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import { AuthContext } from '../providers/authProvider';
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const Navigate = useNavigate();

  // eventhandler for login
  const addLoginHandler = async (e) => {
    e.preventDefault()
    user && login(user, password);
    Navigate('/')

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

  }

  return (
    <div className="div_mapList-locations mb-6 mt-40 m-40">
      <form action="/api/login" method="GET" onSubmit={addLoginHandler} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ring-slate-200 hover:ring-4" >
        <div>

          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input value={user} onChange={(e) => setUser(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username"></input>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="******************"></input>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-6 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          </div>

          <div>
            <Link to="/Signup">Don't have a account? Click here to Register</Link>
          </div>

        </div>
      </form>
    </div>
  )
}